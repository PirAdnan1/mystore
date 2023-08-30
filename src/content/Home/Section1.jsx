import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Container from "@/components/Container";

// assets
import Setting from "@/assets/Setting.png";
import OilImage from "@/assets/Oil.png";

function Section1() {
  return (
    <div className="bg-specialOne">
    <Container>
      <div className="flex justify-center space-x-52 py-12">
        <div>
          <Image src={OilImage} />
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
