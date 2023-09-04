import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import Container from "@/components/Container";

// assets
import Lubricant from "@/assets/Lubricant.png";
import Tire from "@/assets/Tire.png";
import Cylinder from "@/assets/Cylinder.png";
import Nuts from "@/assets/Nuts.png";

function Section2({ products }) {
  console.log(products, "product");

  const [show, setShow] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(8);

  // const loadMore = () => {
  //   setVisibleProducts(visibleProducts + 12); // Increase the number of visible products
  // };

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Container>
      <div className="text-center pt-28">
        <h1 className="font-semibold text-3xl">Top Picks For You</h1>
        <p className="text-[#9F9F9F] text-base font-normal">
          Find a bright ideal to suit your taste with our great selection of
          products.
        </p>
        <div className="grid lg:grid-cols-4 justify-items-center items-center space-y-8 gap-0 pt-24 px-8 mb-16">
          {products.slice(0, visibleProducts).map((product, index) => {
            return (
              <div className="text-base text-left " key={index}>
                {/* <li  key={product.id}> */}
                <Image
                  className=" h-[250px] "
                  src={product.image}
                  alt={product.title}
                  width={214}
                  height={20}
                />

                <p>Brake System</p>
                <p>Part Number: 8-97100-344-2</p>
                <p>Shpe: Al Fareed</p>
                <h4 className="font-semibold">{product.price}</h4>
              </div>
            );
          })}
        </div>
        {show && (
          <div className="grid lg:grid-cols-4 justify-items-center items-center space-y-8 gap-0 pt-24 px-8 mb-16">
            {products.slice(8, 20).map((product, index) => {
              return (
                <div className="text-base text-left " key={index}>
                  {/* <li  key={product.id}> */}
                  <Image
                    className=" h-[250px] "
                    src={product.image}
                    alt={product.title}
                    width={214}
                    height={20}
                  />

                  <p>Brake System</p>
                  <p>Part Number: 8-97100-344-2</p>
                  <p>Shpe: Al Fareed</p>
                  <h4 className="font-semibold">Rs. {product.price}</h4>
                </div>
              );
            })}
          </div>
        )}
        {products.length < visibleProducts ? (
          <a
            className="border-b-2 border-black pb-2 font-semibold"
            onClick={handleClick}
          >
            View More
          </a>
        ) : (
          <a
            className="border-b-2 border-black pb-2 font-semibold"
            onClick={handleClick}
          >
            View less
          </a>
        )}

        {/* <a
          className="border-b-2 border-black pb-2 font-semibold"
          onClick={handleClick}
        >
          View More
        </a> */}
      </div>
    </Container>
  );
}

export default Section2;
