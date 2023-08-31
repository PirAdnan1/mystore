import React from "react";

// components
import Container from "@/components/Container";

// assets
import ShopList from "@/assets/ShopList";
import Grid from "@/assets/Grid";
import Vector from "@/assets/Vector";

function ShopDetails() {
  return (
    <div className="bg-special">
    <Container>
    <div className="flex flex-col md:flex-row justify-between py-10 mt-12 md:px-4 lg:px-24 gap-5 items-center">
      <div className="flex lg:gap-8 gap-3">
        <div className="flex gap-2">
          <ShopList />
          <span>List</span>
        </div>
        <Grid />
        <Vector />
        <div className="w-0.5 h-8 bg-black" />
        <p className="text-base">Showing 1–16 of 32 results</p>
      </div>
      <div className="flex gap-7">
        <div className="flex items-center gap-4">
          <span>Show</span>
          <div className="bg-white flex items-center justify-center py-3 px-4 rounded-lg">
            <span>16</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Sort by</span>
          <div className="bg-white flex items-center justify-center py-3 px-4 rounded-lg">
            <span>Default</span>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
  );
}

export default ShopDetails;
