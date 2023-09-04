import React from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Container from "@/components/Container";

function Section2({ products }) {
  console.log(products, "product");
  return (
    <Container>
      <div className="text-center pt-28">
        <h1 className="font-semibold text-3xl">Top Picks For You</h1>
        <p className="text-[#9F9F9F] text-base font-normal">
          Find a bright ideal to suit your taste with our great selection of
          products.
        </p>
        <div className="grid lg:grid-cols-4 justify-items-center items-center space-y-8 gap-0 pt-24 px-8 mb-16">
          {products.map((product, index) => {
            return (
              <>
              <div className="text-base text-left" key={index}>
                <div key={product.id}>
                  <Image
                  className="w-[214px] h-[251px]"
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                  />
                </div>
                <p>Brake System</p>
                <p>Part Number: 8-97100-344-2</p>
                <p>Shpe: Al Fareed</p>
                <h4 className="font-semibold">Rs: {product.price}</h4>
              </div>
              </>
            );
          })}
        </div>
        <Link href="#" className="border-b-2 border-black pb-2 font-semibold">
          View More
        </Link>
      </div>
    </Container>
  );
}

export default Section2;
