"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios"; // Import Axios
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loading from "../Loading";

const RegisterForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + "/admin/register",
        registerData
      );

      if (response.status === 201) {
        setRegisterData({ name: "", email: "", password: "" });
        toast.success("Register success");
        toast.success("Please login to continue");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data.message) {
          toast.error(error.response?.data.message);
        } else {
          toast.error(error.response?.data.error);
        }
      } else {
        console.log("An unexpected error occurred:", error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full lg:w-auto flex flex-col bg-white rounded-2xl mx-8 lg:mx-0 py-4 lg:py-8 px-4 lg:px-10"
    >
      {!isLoading ? (
        <>
          <h1 className="text-4xl font-righteous text-primary font-bold text-center mb-10 lg:mb-4 pt-4 lg:pt-6">
            Nandur
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1 mb-3 w-full font-roboto">
              <label htmlFor="name" className="">
                Nama
              </label>
              <input
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="on"
                type="text"
                name="name"
                id="name"
                value={registerData.name}
                className="mt-[2px] lg:mt-[4px] w-full lg:w-[400px] border-[1px] rounded-lg lg:rounded-xl border-gray py-1 px-3  placeholder:text-sm focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3 w-full font-roboto">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                autoComplete="on"
                type="text"
                name="email"
                id="email"
                value={registerData.email}
                className="mt-[2px] lg:mt-[4px] w-full lg:w-[400px] border-[1px] rounded-lg lg:rounded-xl border-gray py-1 px-3  placeholder:text-sm focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col gap-1 mb-3 w-full font-roboto">
              <label htmlFor="password" className="">
                Password
              </label>
              <div className="mt-[4px] relative border-[1px] rounded-lg lg:rounded-xl border-gray py-1 px-3">
                <input
                  autoComplete="on"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  placeholder="Input password"
                  id="password"
                  name="password"
                  value={registerData.password}
                  className="focus:outline-none w-full bg-transparent placeholder:text-sm"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-full py-2 mt-8 hover:bg-secondary transition duration-200 ease-in-out"
            >
              Register
            </button>
            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline">
                Login
              </Link>
            </p>
          </form>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RegisterForm;
