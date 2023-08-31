import React from "react";

// components
import Container from "@/components/Container";

function ShopHero() {
  return (
    <div className="bg-Shopbanner bg-cover py-28 text-center">
      <Container>
        <h1 className="text-5xl font-semibold">Shop</h1>
        <span className="mt-2">
          Home <span className="font-bold">{">"}</span> Shop
        </span>
      </Container>
    </div>
  );
}

export default ShopHero;
