import React from "react";

// components
import Container from "@/components/Container";

function Columns() {
  return (
    <div className="bg-[#FAF4F4] mt-14">
    <Container>
    <div className="flex flex-col md:flex-row justify-between gap-x-12 items-start space-y-8 md:space-y-0 bg-[#FAF4F4] py-24 px-24">
      <div>
        <h1 className="text-[32px] font-medium">Free Delivery</h1>
        <p className="max-w-[376px] text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h1 className="text-[32px] font-medium">90 Days Return</h1>
        <p className="max-w-[376px] text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div>
        <h1 className="text-[32px] font-medium">Secure Payment</h1>
        <p className="max-w-[376px] text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </div>
    </Container>
    </div>
  );
}

export default Columns;
