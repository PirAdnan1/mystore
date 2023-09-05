import React from "react";
import Image from "next/image";

// assest
import TireImage1 from "@/assets/TireThree.png";
import TireImage2 from "@/assets/TireOne.png";

function ProdDescription({ products }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center md:gap-12 mt-12">
        <h1 className="md:text-2xl text-lg">Description</h1>
        <h1 className="text-[#9F9F9F] text-lg md:text-2xl">
          Additional Information
        </h1>
        <h1 className="text-[#9F9F9F] text-lg md:text-2xl">Reviews [5]</h1>
      </div>
      <p className="text-[#9F9F9F] text-base px-2 md:px-0 leading-normal font-normal max-w-[1026px] text-center mx-auto mt-11">
        {products.description}
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-11 items-center justify-center">
        <Image
          className="bg-[#e6e6e6] rounded-lg px-20"
          src={products.image}
          width={350}
          height={350}
          alt="descriptionimage"
        />
        <Image
          className="bg-[#e6e6e6] rounded-lg px-20 "
          src={products.image}
          width={350}
          height={350}
          alt="descriptionimage"
        />
      </div>
      <hr className="bg-[#D9D9D9] py-[1px] mt-16" />
    </div>
  );
}

export default ProdDescription;
