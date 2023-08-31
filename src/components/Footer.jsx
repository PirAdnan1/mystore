import React from "react";
import Link from "next/link";

// assets
import Logo from "@/assets/Logo";

function Footer() {
  
  return (
    <div className="flex items-center">
      <Logo />
      <div className="flex">
        <div className="flex flex-col space-y-12">
          <h1>Links</h1>
          <Link href="#">Home</Link>
          <Link href="#">Shop</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
        <div className="flex flex-col space-y-12">
          <h1>Help</h1>
          <Link href="#">Payment Options</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div className="flex flex-col space-y-12">
          <h1>Newa Letters</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              className="border-0 border-b-2 border-black outline-none focus:outline-none"
            />
            <button className="border-b-2 border-black">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
