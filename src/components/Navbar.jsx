import React from "react";
import Link from "next/link";

// components
import Container from "./Container";

// assets
import Logo from "@/assets/Logo";
import User from "@/assets/User";
import Search from "@/assets/Search";
import LoveIcon from "@/assets/LoveIcon";
import AddtoCard from "@/assets/AddtoCard";

function Navbar() {
  return (
    <div className="bg-special hidden lg:block text-base font-semibold">
      <Container>
        <div className="bg-special  flex items-center">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex space-x-12 ">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <Link href="#" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="#" className="hover:text-primary">Tools</Link>
          </ul>
          <div className="flex space-x-12 ml-28">
            <User />
            <Search />
            <LoveIcon />
            <Link href="/cart">
              <AddtoCard />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
