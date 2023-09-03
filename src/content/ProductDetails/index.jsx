import React from "react";

// components
import Layout from "@/layout/Layout";
import ProductHeader from "./ProductHeader";
import ProdDescription from "./ProdDescription";

function ProductDetails() {
  return (
    <Layout>
      <ProductHeader />
      <ProdDescription />
    </Layout>
  );
}

export default ProductDetails;
