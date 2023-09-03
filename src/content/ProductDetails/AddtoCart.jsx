import React from "react";
import Image from "next/image";

// assets
import CloseBox from "@/assets/CloseBox";
import ProductOne from "@/assets/Tire.png";
import Close from "@/assets/Close";

function AddtoCart() {
  return (
    <div className="absolute top-0 right-0 bg-white overflow-y-auto px-12 max-w-[516px]">
      <div className="flex items-center justify-between md:gap-[180px] pt-7">
        <h1 className="text-2xl font-bold">Shoping Cart</h1>
        <CloseBox />
      </div>
      <hr className="py-[1px] bg-[#D9D9D9] max-w-[346px] mt-7" />
      <div className="flex items-center gap-6 mt-11">
        <Image
          src={ProductOne}
          width={100}
          className="bg-[#D9D9D9] px-5 py-2 rounded-lg "
        />
        <div className="flex flex-col ">
          <p>MIRAGE MR-AT172 285/65</p>

          <div className="flex items-center">
            <p className="text-base">
              1 <span className="mx-4">X</span>
            </p>
            <p className="text-[#B88E2F] text-xs">Rs. 250,000.00</p>
          </div>
        </div>
        <div>
          <Close />
        </div>
      </div>
      <div className="flex justify-center items-center gap-16 mt-[380px]">
        <span>Subtotal</span>
        <span className="text-[#B88E2F]">Rs. 50,000.00</span>
      </div>
      <hr className="py-[1px] bg-[#D9D9D9] mt-6" />
      <div className="my-4 flex items-center justify-center md:gap-7 gap-3">
        <button className="border-2 px-9 py-2 border-black whitespace-nowrap rounded-full">
          View Cart
        </button>
        <button className="border-2 px-9 py-2 border-black rounded-full">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default AddtoCart;
