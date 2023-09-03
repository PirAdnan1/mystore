import React from "react";

// assest
import Facebook from "@/assets/Facebook";
import Linkedin from "@/assets/Linkedin";
import Twitter from "@/assets/Twitter";


function ProductInfo() {
  return (
    <div className="mt-10 space-y-3">
      <div className="flex items-center space-x-4">
        <span>SKU</span>
        <span className="mr-3 ml-4">:</span>
        <span>SS001</span>
      </div>
      <div className="flex space-x-4">
        <span>Category</span>
        <span className="mr-3 ml-4">:</span>
        <span>Tire</span>
      </div>
      <div className="flex space-x-4">
        <span>Tags</span>
        <span className="mr-3 ml-4">:</span>
        <span>Tire, rims, Shop</span>
      </div>
      <div className="flex space-x-4">
        <span>Share</span>
        <span className="mr-3 ml-4">:</span>
        <div className="flex items-center space-x-2">
            <Facebook />
            <Linkedin />
            <Twitter />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
