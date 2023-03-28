import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { Heading } from "theme-ui";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <Layout>
      <Heading as="h1">{product.title}</Heading>
      <div>{product.description}</div>
    </Layout>
  );
};

export default ProductTemplate;

export function Head() {
  return <Seo />;
}
