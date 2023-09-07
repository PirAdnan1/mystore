import React from "react";
import Image from "next/image";

// assest
import Product from "@/assets/Tire.png";
import Delete from "@/assets/Delete";

function ProductDetails() {
  return ( 
    <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-20 mt-16">
      <div>
        <ul className="flex font-medium md:space-x-32 space-x-8 bg-[#FFF9E5] justify-end pr-10 py-4">
          <li>Product</li>
          <li>Price</li>
          <li>Quantilty</li>
          <li>Subtotal</li>
        </ul>
        <div className="flex flex-col md:flex-row justify-center items-center shrink-0 mt-16">
          <div className="flex items-center">
            <Image src={Product} width={80} />
            <div className="flex items-center ml-3 mr-5 text-base text-[#9F9F9F]">
              <p>MIRAGE MR-AT172 285/65</p>
              <span className="md:ml-5 ml-3 whitespace-nowrap">Rs. 50,000.00</span>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="border border-black px-3 py-1 rounded-lg md:mr-14 mr-6 flex items-center justify-center">
              <span>1</span>
            </div>
            <span className="mr-14">Rs. 50,000.00</span>
            <Delete />
          </div>
        </div>
      </div>

      <div className="bg-[#FFF9E5] flex flex-col justify-center px-20 pb-20 rounded-lg">
        <h1 className="text-center font-semibold text-3xl pt-4">Cart Totals</h1>

        <div className="flex items-center gap-16 text-base justify-between pt-14">
          <h3 className="font-semibold">Subtotal</h3>
          <span className="text-[#9F9F9F]">Rs. 50,000.00</span>
        </div>
        <div className="flex items-center gap-16 text-base mt-8 justify-between">
          <h3 className="font-semibold">Total</h3>
          <span className="text-[#B88E2F]">Rs. 50,000.00</span>
        </div>
        <button className="border hover:bg-primary hover:text-white border-black rounded-lg mt-11 px-5 py-2 w-full max-w-[222px]">
          Check Out
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
