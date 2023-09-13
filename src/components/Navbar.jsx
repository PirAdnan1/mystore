// hooks
import { useState } from "react";

// util
import clsx from "clsx";

// components
import Container from "./Container";
import Link from "next/link";

// hooks
import useIsMobile from "@/hooks/useIsMobile";

// icons
import Close from "@/assets/Close";
import Burger from "@/assets/Burger";
import Logo from "@/assets/Logo";
import User from "@/assets/User";
import Search from "@/assets/Search";
import LoveIcon from "@/assets/LoveIcon";
import AddtoCard from "@/assets/AddtoCard";

export default function Navbar() {
  const isMobile = useIsMobile(1024);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-special">
      <Container>
        <div className="flex justify-between items-center  py-7 px-4">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-4">
            <div className="lg:hidden">
              <AddtoCard />
            </div>
            <button
              onClick={() => setIsMenuOpen(true)}
              className={clsx("pb-4 text-primary", {
                hidden: !isMobile,
              })}
            >
              <Burger className="text-2xl" />
            </button>
          </div>
          <div
            className={clsx(
              "flex flex-grow transition-transform duration-500",
              {
                "fixed inset-0 z-50 translate-x-[100%] bg-white": isMobile,
                "!translate-x-0": isMenuOpen,
              }
            )}
          >
            <div
              className={clsx({
                "flex flex-grow items-center justify-between": !isMobile,

                "mx-auto flex max-w-sm flex-grow flex-col gap-12 text-2xl":
                  isMobile,
              })}
            >
              <div
                className={clsx("flex h-[100px] items-end justify-between", {
                  hidden: !isMobile,
                })}
              >
                <Logo className="text-xs pl-2" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="pb-4 pr-4 text-primary transition-colors hover:text-cool-grey-800"
                >
                  <Close />
                </button>
              </div>
              <ul
                className={clsx(
                  "flex items-center 2xl:space-x-12 xl:gap-16 gap-16 md:gap-7 lg:ml-auto",
                  {
                    "flex-col": isMobile,
                  }
                )}
              >
                <li className="hover:text-primary text-xs text-secondary font-bold">
                  <Link href="/" className="hover:text-primary text-base">
                    Home
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-secondary font-bold">
                  <Link href="/shop" className="hover:text-primary text-base">
                    Shop
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-secondary font-bold">
                  <Link href="#" className="hover:text-primary text-base">
                    About
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-secondary font-bold">
                  <Link
                    href="/contact"
                    className="hover:text-primary text-base"
                  >
                    Contact
                  </Link>
                </li>
                <li className="hover:text-primary text-xs text-secondary font-bold">
                  <Link href="#" className="hover:text-primary text-base">
                    Tools
                  </Link>
                </li>
              </ul>
              <div
                className={clsx("flex justify-center gap-4 lg:ml-auto", {
                  "w-full mx-auto  max-w-sm flex-col": isMobile,
                })}
              >
                <div className="flex space-x-12 justify-center">
                  <Link href="/account">
                    <User />
                  </Link>
                  <Search />
                  <LoveIcon />
                  <Link href="/cart" className="hidden lg:block">
                    <AddtoCard />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
