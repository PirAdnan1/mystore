import React from "react";

// components
import Input from "@/components/Input";

function Form() {
  return (
    <div className="flex flex-col md:w-[50%] px-4 w-full shrink-0">
      <form>
        <Input label="Your Name" type="text" placeholder="Abc" />
        <div className="mt-9">
          <Input
            label="Email Address"
            type="email"
            placeholder="Abc@gmail.com"
          />
        </div>

        <div className="mt-9">
          <Input label="Subject" type="text" placeholder="This is Optional" />
        </div>

        <div className="mt-9 flex flex-col">
          <label className="font-semibold">Message</label>
          <textarea
            className="resize-none mt-5 max-w-[528px] h-[120px] outline-none border border-black rounded-lg px-7 pt-6"
            placeholder="Hi! i’d like to ask about"
            required
          ></textarea>
        </div>

        <button className="border border-black py-3 px- px-20 rounded-lg max-w-[237px] mt-12 hover:bg-primary hover:text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
