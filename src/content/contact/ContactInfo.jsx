import React from "react";

// assets
import Address from "@/assets/Address";
import PhoneIcon from "@/assets/PhoneIcon";

// components
import Container from "@/components/Container";

import Form from "./Form";

function ContactInfo() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-24 lg:items-start mt-32 overflow-x-hidden">
        <div className="shrink-0 flex flex-col justify-center items-center w-[50%]">
          <div className="flex items-start gap-8">
            <Address />
            <div>
              <h1 className="text-2xl font-medium">Address</h1>
              <p>Lorem Ipsum...</p>
            </div>
          </div>
          <div className="flex items-start gap-8 mt-24">
            <PhoneIcon />
            <div>
              <h1 className="text-2xl font-medium">Phone</h1>
              <p>Lorem Ipsum...</p>
            </div>
          </div>
        </div>
        
        <Form />
      </div>
    </Container>
  );
}

export default ContactInfo;
