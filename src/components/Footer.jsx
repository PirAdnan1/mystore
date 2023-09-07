import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// assets
import Logo from "@/assets/Logo";

function Footer() {
  return (
    <Container>
      <div className="grid md:grid-cols-3 grid-cols-1 text-base font-medium items-center justify-items-center lg:gap-28 md:gap-5 pt-24 px-12 justify-center">
        <Logo />
        <div className="flex flex-col items-start md:flex-row space-y-10 md:space-y-0 lg:gap-24 gap-10 md:ml-32 mb-4">
          <div className="flex flex-col space-y-12">
            <h1 className="text-[#9F9F9F]">Links</h1>
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className="flex flex-col space-y-12">
            <h1 className="text-[#9F9F9F]">Help</h1>
            <Link href="#">Payment Options</Link>
            <Link href="#">Returns</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-12">
            <h1 className="text-[#9F9F9F]">Newa Letters</h1>
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row space-x-4">
              <input
                type="text"
                className="border-0 border-b-2 border-black outline-none focus:outline-none"
                placeholder="Enter Your Email Address"
              />
              <button className="md:border-b-2 bg-primary hover:text-primary md:bg-white py-3 md:py-0 rounded-lg md:rounded-none text-white md:text-black uppercase md:border-b-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="py-[1px] bg-[#D9D9D9] max-w-[1240.015px] mx-auto" />
      <p className="text-base font-normal py-6 text-center">
        2023-24 autoessentials. All rights reverved
      </p>
    </Container>
  );
}

export default Footer;
