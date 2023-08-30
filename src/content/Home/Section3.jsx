import React from "react";
import Image from "next/image";

// components
import Container from "@/components/Container";

// assets
import ShellOil from "@/assets/ShellOil.png";

function Section3() {
    
  return (
    <div className="bg-primary">
      <Container>
        <div className="flex  items-center space-x-4 mt-6">
          <Image src={ShellOil} width={800} />
          <div className="space-y-6 flex flex-col items-center">
            <span className="text-lg font-semibold">New Arrivals</span>
            <h1 className="text-5xl font-bold">Shell Engine Oil</h1>
            <button className="px-3 py-2 bg-white font-semibold">
              Shop Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Section3;
