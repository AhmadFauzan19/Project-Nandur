import RegisterForm from "@/components/Auth/RegisterForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Register - Nandur",
  description: "Register to Nandur",
};

const page = () => {
  return (
    <div className="bg-primary w-screen h-screen place-items-center flex lg:place-content-center">
      <RegisterForm />
    </div>
  );
};

export default page;
