import React from "react";
import Confirm from "@/components/confirm";
import { Metadata } from "next";
import LoginForm from "@/components/Auth/LoginForm";

export const metadata: Metadata = {
  title: "Login - Nandur",
  description: "Login to Nandur",
};

const page = () => {
  return (
    <div className="bg-primary w-screen h-screen place-items-center flex lg:place-content-center">
      <LoginForm />
    </div>
  );
};

export default page;
