"use client";
import Box from "@/components/Admin/Box";
import Package from "@/components/Admin/Package";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Dashboard = () => {
  const router = useRouter();
  const checkAuth = async () => {
    if (!localStorage.getItem("token")) {
      return router.push("/login");
    } else {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/admin/profile",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.status !== 200) {
        console.log("An error occurred:", res.data.message);
        router.push("/login");
      } else {
        toast.success("Welcome back, " + res.data.name);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="py-10">
      <button
        className="border-[1px] rounded-lg bg-white border-gray text-sm px-3 py-2 font-semibold hover:bg-primary hover:border-transparent hover:text-white transition-all duration-300 ease-in-out
      "
      >
        Add section{" "}
      </button>

      <div className="w-full flex flex-col gap-12">
        <Box />
        <Package />
      </div>
    </div>
  );
};

export default Dashboard;
