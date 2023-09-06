import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// components
import Container from "@/components/Container";
import Pagination from "./Pagination";

function MyShopProducts({ products }) {
  const [searchText, setSearchText] = useState("");

  const filtercoin = products.filter((item) => {
    return item.title.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <Container>
      <div>
        <div className="flex justify-center items-start border-1 border-blue-300 py-4">
          <input
            className="py-1 px-3 rounded-lg"
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="">
          {/* <Link href="/productdetails"> */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-28 mt-20 grid-cols-1 px-24 justify-center items-center">
            {filtercoin.map((product, index) => {
              return (
                <Link key={index} href={`/product/${product.id}`}>
                  <div className="">
                    <Image
                      src={product.image}
                      className="w-[214px] h-[254px]"
                      alt="products"
                      width={214}
                      height={214}
                    />
                    <p className="max-w-[160px] mt-2">
                      {product.title.slice(0, 30)}...
                    </p>
                    <div className="max-w-xs">
                      <p className="font-bold truncate">Rs: {product.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center items-center md:gap-10 gap-3 mt-28">
          <Pagination value={1} />
          <Pagination value={2} />
          <Pagination value={3} />
          <Pagination value={"Next"} />
        </div>
      </div>
    </Container>
  );
}

export default MyShopProducts;
