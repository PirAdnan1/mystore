import React from "react";

// components
import Layout from "@/layout/Layout";
import Header from "@/components/Header";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function HomeContents({ products }) {
  return (
    <div>
      <Header />
      <Layout>
        <Hero />
        <Section1 />
        <Section2 products={products} />
        <Section3 />
        <Section4 />
        <Section5 />
      </Layout>
    </div>
  );
}

export default HomeContents;
