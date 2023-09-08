import React from "react";

// components
import Input from "@/components/Input";

function Register() {
  return (
    <div className="mt-24">
      <h1 className="text-4xl font-semibold">Register</h1>
      <p className="font-medium text-base mt-9">Email Address</p>
      <form>
        <Input placeholder={"Enter your mail address"} />{" "}
        <p className="mt-9 text-base max-w-[453px]">A link to set a new password will be sent to your email address.</p>
        <p className="mt-4 text-base max-w-[453px]">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <b>privacy policy.</b>
        </p>
        <button type="submit" className="py-5 px-20 border mt-[64px] hover:bg-primary hover:border-primary hover:text-white border-black rounded-xl">Register</button>
      </form>
    </div>
  );
}

export default Register;
