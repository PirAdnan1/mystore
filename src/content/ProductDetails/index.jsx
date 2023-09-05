import React from "react";

// components
import Layout from "@/layout/Layout";
import ProductHeader from "./ProductHeader";
import ProdDescription from "./ProdDescription";

function ProductDetails({ products }) {
  return (
    <Layout>
      <ProductHeader products={products} />
      <ProdDescription products={products} />
    </Layout>
  );
}

export default ProductDetails;
