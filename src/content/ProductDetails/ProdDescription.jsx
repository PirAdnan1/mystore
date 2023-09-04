import React from "react";
import Image from "next/image";

// assest
import TireImage1 from "@/assets/TireThree.png";
import TireImage2 from "@/assets/TireOne.png";

function ProdDescription() {
  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center md:gap-12 mt-12">
        <h1 className="md:text-2xl text-lg">Description</h1>
        <h1 className="text-[#9F9F9F] text-lg md:text-2xl">Additional Information</h1>
        <h1 className="text-[#9F9F9F] text-lg md:text-2xl">Reviews [5]</h1>
      </div>
      <p className="text-[#9F9F9F] text-base px-2 md:px-0 leading-normal font-normal max-w-[1026px] text-center mx-auto mt-11">
        The Mirage AT MR-172 265/65 R17 is a multipurpose all-terrain light
        truck tyre. It has been engineered to deliver high mileage. Mirage MR
        AT-172 Performs best in on road and off road driving conditions. The
        Mirage AT MR-172 265/65 R17 has an aggressive tread design. Its
        aggressive tread delivers excellent wet and dry traction. It also offers
        even tread wear hence longer tread life is achieved.stable tread block
        design provides better traction and improves cornering and braking in
        all weather conditions. Mirage AT MR-172 265/65 R17 Lateral sipes also
        help in improving mud snow and wet qualities.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-11 items-center justify-center">
        <Image
          className="bg-[#e6e6e6] rounded-lg px-20"
          src={TireImage1}
          width={350}
        />
        <Image
          className="bg-[#e6e6e6] rounded-lg px-20"
          src={TireImage2}
          width={350}
        />
      </div>
      <hr className="bg-[#D9D9D9] py-[1px] mt-16" />
    </div>
  );
}

export default ProdDescription;
