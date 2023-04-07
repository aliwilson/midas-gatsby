const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { title: ASC }) {
        edges {
          node {
            title
            storefrontId
            shopifyId
            handle
            description
            status
            featuredImage {
              altText
              originalSrc
              gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
            }
            variants {
              availableForSale
              storefrontId
              title
              price
              selectedOptions {
                name
                value
              }
              image {
                gatsbyImageData(layout: CONSTRAINED, width: 640, aspectRatio: 1)
              }
            }
            options {
              name
              values
              shopifyId
          }
            priceRangeV2 {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `);
  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.jsx`),
      context: {
        product: node,
        shopifyId: node.shopifyId
      },
    });
  });
};
