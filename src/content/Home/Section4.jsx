import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";
import DateTime from "./DateTime";

// assets
import EngineOil from "@/assets/EngineOil.png";
import EngineOilOne from "@/assets/EngineOilOne.png";
import EngineOilTwo from "@/assets/EngineOilTwo.png";
import Link from "next/link";

function Section4() {
  return (
    <Container> 
      <h1 className="lg:text-4xl text-2xl text-center font-semibold mt-12">Our Blogs</h1>
      <p className="text-[#9F9F9F] text-center">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="flex px-8 md:px-12 flex-col md:flex-row justify-center space-x-8 mt-16">
        <div className="flex flex-col items-center space-y-2">
          <Image src={EngineOil} width={300} />
          <p className="mt-8">How to change engine oil at home?</p>
          <DateTime />
          <Link href="#" className="border-b-2 pb-1 font-semibold border-black">
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image src={EngineOilOne} width={300} />
          <p className="mt-8">Guide to prolong the life of engine oil</p>
          <DateTime />
          <Link href="#" className="border-b-2 pb-1 font-semibold border-black">
            Read More
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Image src={EngineOilTwo} width={300} />
          <p className="mt-8">How to take care of engine oil?</p>
          <DateTime />
          <Link href="#" className="border-b-2 font-semibold pb-1 border-black">
            Read More
          </Link>
        </div>
      </div>
      <div className="text-center mt-16">
        <Link href="#" className="border-b-2 font-bold border-black pb-1">
          View All Post
        </Link>
      </div>
    </Container>
  );
}

export default Section4;
