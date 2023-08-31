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
          <Logo />
          <ul className="flex space-x-12">
            <Link href="#">Home</Link>
            <Link href="#">Shop</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Tools</Link>
            <Link href="#">Tools</Link>
          </ul>
          <div className="flex space-x-12 ml-28">
            <User />
            <Search />
            <LoveIcon />
            <AddtoCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
