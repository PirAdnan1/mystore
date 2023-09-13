import React from "react";

// components
import Input from "@/components/Input";
import Register from "./Register";
import Container from "@/components/Container";

function Form() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 justify-items-center">
        <div className="mt-24">
          <h1 className="text-4xl font-semibold">Log In</h1>
          <p className="font-medium text-base mt-9">
            Username or email address
          </p>
          <form>
            <Input placeholder={"Enter your Email Address"} />
            <p className="mt-9">Password</p>
            <Input placeholder={"Password"} />
            <div class="mb-[0.125rem] block mt-10 min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left cursor-pointer -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
                type="checkbox"
                id="checkbox"
              />
              <label className="inline-block pl-5 text-base" for="checkbox">
                Remember me
              </label>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-x-8 items-center mt-10">
              <button
                type="submit"
                className="py-5 px-20 border hover:bg-primary hover:border-primary hover:text-white border-black rounded-xl"
              >
                Log In
              </button>
              <span>Lost Your Password?</span>
            </div>
          </form>
        </div>
        <div>
          <Register />
        </div>
      </div>
    </Container>
  );
}

export default Form;
