"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between items-center py-4 px-24 bg-primary shadow-md">
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/logo_nandur.png"
          alt="nandur logo"
          width={75}
          height={100}
        ></Image>

        <Link href="/">
          <h1 className="text-3xl font-semibold text-white font-righteous">
            Nandur Admin
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-16 font-roboto flex gap-8 text-white">
        <Link
          className={`hover:font-semibold ${
            pathname === "/" ? "font-semibold" : ""
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`hover:font-semibold ${
            pathname === "/profile" ? "font-semibold" : ""
          }`}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={`hover:font-semibold ${
            pathname === "/products" ? "font-semibold" : ""
          }`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`hover:font-semibold ${
            pathname === "/guide" ? "font-semibold" : ""
          }`}
          href="/guide"
        >
          Guide
        </Link>
        <button onClick={handleLogout}>Logout</button>
        <div className="w-10 aspect-square rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Navbar;
