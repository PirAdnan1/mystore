// hooks
import { useState } from "react";
import { useRouter } from "next/router";

// util
import clsx from "clsx";
import cn from "@/utils/cn";

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
  const router = useRouter();
  return (
    <Container>
      <div className="flex justify-between items-center bg-special py-7 px-4 lg:px-10 shadow-md">
        <Link href="/">
          <Logo />
        </Link>
        <button
          onClick={() => setIsMenuOpen(true)}
          className={clsx(
            "pb-4 text-primary transition-colors hover:text-cool-grey-800",
            {
              hidden: !isMobile,
            }
          )}
        >
          <Burger className="text-2xl" />
        </button>
        <div
          className={clsx("flex flex-grow transition-transform duration-500", {
            "fixed inset-0 z-50 translate-x-[100%] bg-white": isMobile,
            "!translate-x-0": isMenuOpen,
          })}
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
              className={clsx("flex items-center 2xl:space-x-12 lg:gap-16 gap-10 lg:ml-auto", {
                "flex-col": isMobile,
              })}
            >
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/"
                  className="hover:text-primary text-base"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="/shop"
                  className="hover:text-primary text-base"
                >
                  Shop
                </Link>
              </li>
              <li className="hover:text-primary text-xs text-secondary font-bold">
                <Link
                  href="#"
                  className="hover:text-primary text-base"
                >
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
                <Link
                  href="#"
                  className="hover:text-primary text-base"
                >
                  Tools
                </Link>
              </li>
            </ul>
            <div
              className={clsx("flex justify-center gap-4 lg:ml-auto", {
                "w-full mx-auto  max-w-sm flex-col": isMobile,
              })}
            >
              <div className="flex space-x-12 ml-28">
                <Link href="/account">
                  <User />
                </Link>
                <Search />
                <LoveIcon />
                <Link href="/cart">
                  <AddtoCard />{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

// import React, { useState } from "react";
// import Link from "next/link";

// // components
// import Container from "./Container";

// // assets
// import Logo from "@/assets/Logo";
// import User from "@/assets/User";
// import Search from "@/assets/Search";
// import LoveIcon from "@/assets/LoveIcon";
// import AddtoCard from "@/assets/AddtoCard";

// function Navbar() {
//   const [show, setShow] = useState(false);

//   const handleChange = () => {
//     setShow(!show);
//   };

//   return (
//     <div className="bg-special text-base font-semibold w-full h-full">
//       <Container>
//         <div className="bg-special  flex items-center ">
//           <Link href="/">
//             <Logo />
//           </Link>
//           <ul className="flex space-x-12 ">
//             <Link href="/" className="hover:text-primary">
//               Home
//             </Link>
//             <Link href="/shop" className="hover:text-primary">
//               Shop
//             </Link>
//             <Link href="#" className="hover:text-primary">
//               About
//             </Link>
//             <Link href="/contact" className="hover:text-primary">
//               Contact
//             </Link>
//             <Link href="#" className="hover:text-primary">
//               Tools
//             </Link>
//           </ul>
//           <div className="flex space-x-12 ml-28">
//             <Link href="/account">
//               <User />
//             </Link>
//             <Search />
//             <LoveIcon />
//             <Link href="/cart">
//               <AddtoCard />
//             </Link>
//           </div>
//         </div>
//         {show && (
//           <div className="w-full bg-white hidden">
//             <ul className="flex flex-col space-y-4 items-center opacity-80 bg-slate-200">
//               <li>
//                 <Link
//                   href="/"
//                   className="hover:text-indigo-600 hover:bg-indigo-100"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shop"
//                   className="hover:text-indigo-600 hover:bg-indigo-100"
//                 >
//                   Shop
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="hover:text-indigo-600 hover:bg-indigo-100"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="hover:text-indigo-600 hover:bg-indigo-100">
//                 <Link href="#">Contact</Link>
//               </li>
//               <li>
//                 <Link
//                   href="#"
//                   className="hover:text-indigo-600 hover:bg-indigo-100"
//                 >
//                   Tools
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Navbar;
