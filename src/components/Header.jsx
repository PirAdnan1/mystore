import React from "react";

// components
import Container from "./Container";

// assets
import Phone from "@/assets/Phone";
import InboxIcon from "@/assets/InboxIcon";

function Header() {
  return (
    <div className="bg-primary">
      <Container>
        <div className="lg:px-28 px-8 md:px-12 flex flex-col space-y-4 md:space-y-0 md:flex-row py-4 justify-center md:justify-between items-center">
          <div className="flex items-center space-x-2">
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
            <button className="bg-secondary text-specialOne hover:text-primary hover:bg-white lg:px-8 lg:py-3 px-3 py-2 rounded-lg">
              Become a seller
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
