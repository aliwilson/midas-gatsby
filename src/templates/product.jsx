import React from 'react';
import { graphql, Link } from 'gatsby';
import isEqual from 'lodash.isequal';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { formatPrice } from '../utils/format-price';
import { StoreContext } from '../context/store-context';
import Layout from '../components/layout';
import Seo from '../components/Seo';
import { Heading } from 'theme-ui';
import { NumericInput } from "../components/numeric-input"
import { AddToCart } from "../components/add-to-cart"

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  const { client } = React.useContext(StoreContext);

  const {
    options,
    featuredImage,
    variants,
    variants: [initialVariant],
    priceRangeV2,
    title,
    description,
  } = product;
  const [variant, setVariant] = React.useState({ ...initialVariant });
  const [quantity, setQuantity] = React.useState(1);

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant;

  const [available, setAvailable] = React.useState(
    productVariant.availableForSale
  );

  const checkAvailablity = React.useCallback(
    (productId) => {
      client.product.fetch(productId).then((fetchedProduct) => {
        const result =
          fetchedProduct?.variants.filter(
            (variant) => variant.id === productVariant.storefrontId
          ) ?? [];

        if (result.length > 0) {
          setAvailable(result[0].available);
        }
      });
    },
    [productVariant.storefrontId, client.product]
  );

  const handleOptionChange = (index, event) => {
    const value = event.target.value;

    if (value === '') {
      return;
    }

    const currentOptions = [...variant.selectedOptions];

    currentOptions[index] = {
      ...currentOptions[index],
      value,
    };

    const selectedVariant = variants.find((variant) => {
      return isEqual(currentOptions, variant.selectedOptions);
    });

    setVariant({ ...selectedVariant });
  };

  React.useEffect(() => {
    checkAvailablity(product.storefrontId);
  }, [productVariant.storefrontId, checkAvailablity, product.storefrontId]);

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    variant.price
  );

  const hasVariants = variants.length > 1;
  const hasImages = featuredImage;
  const hasMultipleImages = true || featuredImage.length > 1;

  console.log(product);
  console.log(featuredImage);
  return (
    <Layout>
      <Heading as="h1">{product.title}</Heading>
      {hasImages && (
        <div>
          <div
            role="group"
            aria-label="gallery"
            aria-describedby="instructions"
          >
            <GatsbyImage
              objectFit="contain"
              loading={'eager'}
              alt={
                featuredImage.altText
                  ? featuredImage.altText
                  : `Product Image of ${title}`
              }
              image={featuredImage.gatsbyImageData}
            />
          </div>

          <h2>
            <span>{price}</span>
          </h2>
        </div>
      )}
      {!hasImages && <span>No Preview image</span>}
      <div>{description}</div>
      <div >
        <NumericInput
          aria-label="Quantity"
          onIncrement={() => setQuantity((q) => Math.min(q + 1, 20))}
          onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
          onChange={(event) => setQuantity(event.currentTarget.value)}
          value={quantity}
          min="1"
          max="20"
        />
        <AddToCart
          variantId={productVariant.storefrontId}
          quantity={quantity}
          available={available}
        />
      </div>
    </Layout>
  );
};

export default ProductTemplate;

export function Head() {
  return <Seo />;
}
