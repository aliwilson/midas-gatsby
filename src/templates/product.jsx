import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <Layout>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
    </Layout>
  );
};

export default ProductTemplate;

export function Head() {
  return <Seo />;
}
