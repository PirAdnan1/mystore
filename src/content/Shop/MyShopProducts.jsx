import React from "react";

// components
import Container from "@/components/Container";
import ShopProducts from "./ShopProducts";
import Pagination from "./Pagination";

// Assets
import OilInRed from "@/assets/OinInred.png";
import OilInGray from "@/assets/OilInGray.png";
import OilInBlack from "@/assets/OilInBlack.png";
import TireOne from "@/assets/TireOne.png";
import TireTwo from "@/assets/TireTwo.png";
import TireThree from "@/assets/TireThree.png";
import TireFour from "@/assets/TireFour.png";
import FilterOne from "@/assets/FilterOne.png";
import FilterTwo from "@/assets/FilterTwo.png";

function MyShopProducts() {
  return (
    <Container>
      <div>
        <div className="grid md:grid-cols-3 mt-16 lg:grid-cols-4 items-center justify-items-center lg:gap-9 gap-3 space-y-7">
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
          />
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
