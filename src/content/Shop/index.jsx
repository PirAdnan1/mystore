import React from "react";

// components
import Layout from "@/layout/Layout";
import ShopHero from "./ShopHero";
import ShopDetails from "./ShopDetails";
import MyShopProducts from "./MyShopProducts";
import Pagination from "./Pagination";
import Information from "./Information";


function ShopContents({products}) {
  return (
    <Layout>
      <ShopHero />
      <ShopDetails />
      <MyShopProducts products={products} />
      <Information />
    </Layout>
  );
}

export default ShopContents;
