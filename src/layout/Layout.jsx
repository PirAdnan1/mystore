import React from "react";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Layout({ children }) {
  return (
    <div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
