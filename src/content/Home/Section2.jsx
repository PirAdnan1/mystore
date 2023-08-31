import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Container from "@/components/Container";

// assets
import Lubricant from "@/assets/Lubricant.png";
import Tire from "@/assets/Tire.png";
import Cylinder from "@/assets/Cylinder.png";
import Nuts from "@/assets/Nuts.png";

function Section2() {
  
  return (
    <Container>
      <div className="text-center pt-28">
        <h1 className="font-semibold text-3xl">Top Picks For You</h1>
        <p className="text-[#9F9F9F] text-base font-normal">
          Find a bright ideal to suit your taste with our great selection of
          products.
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-x-24 pt-24 px-8">
          <div className="text-base text-left">
            <Image src={Lubricant} className="w-[150px] md:w-[243px]" />
            <p>Brake System</p>
            <p>Part Number: 8-97100-344-2</p>
            <p>Shpe: Al Fareed</p>
            <h4 className="font-semibold">Rs. 25,000.00</h4>
          </div>
          <div className="text-base text-left">
            <Image src={Tire} className="w-[150px] md:w-[243px]" />
            <p className="pt-6">Brake System</p>
            <p>Part Number: 8-97100-344-2</p>
            <p>Shpe: Al Fareed</p>
            <h4 className="font-semibold">Rs. 25,000.00</h4>
          </div>
          <div className="text-base text-left">
            <Image src={Cylinder} className="w-[150px] md:w-[243px]" />
            <p className="pt-11">Brake System</p>
            <p>Part Number: 8-97100-344-2</p>
            <p>Shpe: Al Fareed</p>
            <h4 className="font-semibold">Rs. 25,000.00</h4>
          </div>
          <div className="text-base text-left mb-14">
            <Image src={Nuts} className="w-[150px] md:w-[243px]" />
            <p className="pt-11">Brake System</p>
            <p>Part Number: 8-97100-344-2</p>
            <p>Shpe: Al Fareed</p>
            <h4 className="font-semibold">Rs. 25,000.00</h4>
          </div>
        </div>
        <Link href="#" className="border-b-2 border-black pb-2 font-semibold">
          View More
        </Link>
      </div>
    </Container>
  );
}

export default Section2;
