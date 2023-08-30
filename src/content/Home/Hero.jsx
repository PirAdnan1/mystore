import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";

// assets
import HeroImage from "@/assets/HeroImg.png";

function Hero() {
  return (
    <div className="bg-special">
      <Container>
        <div className=" flex justify-center space-x-5 items-center py-4">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-6xl text-white font-semibold">
              Auto <span className="text-black">Spare Parts</span>
            </h1>
            <p className="text-xl font-semibold">All Major Brand Available</p>
            <button className="bg-primary px-3 py-2 text-white rounded-lg">
              Shop Now
            </button>
          </div>
          <div>
            <Image src={HeroImage} width={536} height={547} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
