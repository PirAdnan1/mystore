import React, { useState } from "react";
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
  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow(!show);
  };

  return (
    <div className="bg-special text-base font-semibold w-full h-full">
      <Container>
        <div className="bg-special  flex items-center ">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="md:flex space-x-12 hidden  lg:block">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Tools</Link>
          </ul>
          <div className="flex w-full items-center justify-center md:space-x-12 md:ml-28">
            {/* <div className="md:flex hidden lg:block"> */}
            <User />
            <LoveIcon />
            <Search />
            {/* </div> */}
            {/* <span onClick={handleChange}> */}
            <AddtoCard />
            {/* </span> */}
          </div>
        </div>
        {show && (
          <div className="w-full bg-white hidden">
            <ul className="flex flex-col space-y-4 items-center opacity-80 bg-slate-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-600 hover:bg-indigo-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-indigo-600 hover:bg-indigo-100"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 hover:bg-indigo-100"
                >
                  About
                </Link>
              </li>
              <li className="hover:text-indigo-600 hover:bg-indigo-100">
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-indigo-600 hover:bg-indigo-100"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Navbar;
