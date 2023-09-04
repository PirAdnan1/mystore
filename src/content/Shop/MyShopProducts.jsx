import React from "react";
import Link from "next/link";

// components
import Container from "@/components/Container";
import ShopProducts from "./ShopProducts";
import Pagination from "./Pagination";

// Assets
import OilInRed from "@/assets/OilInRed.png";
import OilInGray from "@/assets/OilInGray.png";
import OilInBlack from "@/assets/OilInBlack.png";
import TireOne from "@/assets/TireOne.png";
import TireTwo from "@/assets/TireTwo.png";
import TireThree from "@/assets/TireThree.png";
import TireFour from "@/assets/TireFour.png";
import FilterOne from "@/assets/FilterOne.png";
import FilterTwo from "@/assets/FilterTwo.png";
import Image from "next/image";

const filldata = Array(16).fill({
  productImage: OilInRed,
  productPrice: "Rs. 25,000.00",
  productDetails: "Shell Engine Oil Shop: Oil house",
});

function MyShopProducts() {
  return (
    <Container>
      <div>
        <div className="">
          <Link href="/productdetails">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-24 justify-center items-center">
              {filldata.map((item, index) => {
                return (
                  <div className="" key={index}>
                    <Image src={item.productImage} alt="products" width={214} />
                    <p className="max-w-[160px] mt-2">{item.productDetails}</p>
                    <p className="font-bold">{item.productPrice}</p>
                  </div>
                );
              })}
            </div>

            {/* <ShopProducts
              productImage={OilInRed}
              productDetails={`Shell Engile Oil Shope: Oil house`}
              productPrice={"Rs. 25,000.00"}
            /> */}
          </Link>
          {/* <ShopProducts
            productImage={OilInGray}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 15,000.00"}
          />
          <ShopProducts
            productImage={OilInBlack}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={OilInRed}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={OilInGray}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 15,000.00"}
          />
          <ShopProducts
            productImage={OilInBlack}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={OilInRed}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={OilInBlack}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={TireOne}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={TireTwo}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={TireThree}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={TireFour}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={FilterOne}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={FilterTwo}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={FilterOne}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          />
          <ShopProducts
            productImage={FilterTwo}
            productDetails={`Shell Engile Oil Shope: Oil house`}
            productPrice={"Rs. 25,000.00"}
          /> */}
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
