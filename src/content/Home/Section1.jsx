import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Container from "@/components/Container";

// assets
import Setting from "@/assets/Setting.png";

function Section1() {
  return (
    <div className="bg-specialOne">
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-9 lg:space-y-0 md:space-x-52 py-12 px-8">
        <div>
          {/* <Image src={OilImage} /> */}
          <p className="text-xl font-semibold mb-2">Lubricants</p>
          <Link href="#" className="border-b-2 text-lg border-black pb-1">
            View More
          </Link>
        </div>
        <div>
          <Image src={Setting} />
          <p className="text-xl font-semibold mb-2">Spare Parts</p>
          <Link href="#" className="border-b-2 text-lg border-black pb-1">
            View More
          </Link>
        </div>
      </div>
    </Container>
    </div>
  );
}

export default Section1;
