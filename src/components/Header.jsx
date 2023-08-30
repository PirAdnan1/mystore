import React from "react";

// components
import Container from "./Container";

// assets
import Phone from "@/assets/Phone";
import InboxIcon from "@/assets/InboxIcon";
function Header() {
  return (
    <Container>
      <div className="bg-primary">
        <div className="flex items-center space-x-3">
          <Phone />
          <p className="text-white">
            call us <br /> +923484686517
          </p>
        </div>
        {/* <InboxIcon /> */}
        <p>Adnan</p>
      </div>
    </Container>
  );
}

export default Header;
