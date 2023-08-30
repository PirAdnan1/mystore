import React from "react";

// components
import Container from "./Container";

// assets
import Phone from "@/assets/Phone";
import InboxIcon from "@/assets/InboxIcon";
function Header() {
  return (
    <Container>
      <div className="bg-primary px-28 flex py-4 justify-between items-center">
        <div className="flex items-center space-x-3">
          <Phone />
          <p className="text-white leading-normal">
            call us <br /> +923484686517
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <InboxIcon />
          <p className="text-white leading-normal">
            Send us mail <br /> piradnan113@gmail.com
          </p>
        </div>
        <div>
          <button className="bg-secondary text-white px-8 py-3 rounded-lg">
            Become a seller
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
