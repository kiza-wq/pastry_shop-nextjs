"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import { CartContex } from "../AppContext";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  const { cartProducts } = useContext(CartContex);
  const logoIconStyle = { width: "30px", height: "30px" };
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }

  return (
    <header className="m-2 flex flex-col md:flex-row items-center justify-between text-sm lg:text-lg md:min-w-3xl lg:min-w-7xl 2xl:min-w-350 ">
      <nav className="flex gap-4 xl:gap-8 font-medium text-stone-800 cursor-pointer items-center justify-center mb-4 xl:m-4">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="/logo.png"
            style={logoIconStyle}
            width={30}
            height={30}
            alt="logo"
            loading="eager"
          />
          <span className="text-primary text-xs xl:text-base hover:text-rose-700 font-bold">
            Pastry Shop
          </span>
        </Link>
        <Link href="/" className="hover:text-rose-700 hover:underline">
          Home
        </Link>
        <Link href="/menu" className="hover:text-rose-700 hover:underline">
          Menu
        </Link>
        <Link href="/#about" className="hover:text-rose-700 hover:underline">
          About
        </Link>
        <Link href="/#contact" className="hover:text-rose-700 hover:underline">
          Contact
        </Link>
      </nav>
      <nav className="flex gap-4 text-black-700 font-semibold items-center">
        {status === "authenticated" && (
          <>
            <Link
              className="whitespace-nowrap hover:text-rose-700"
              href={"/profile"}
            >
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="px-3 xl:px-8 py-1 xl:py-2 font-medium border border-rose-700 hover:bg-rose-700 hover:text-white rounded-3xl flex items-center gap-x-2"
            >
              Logout
            </button>
            <Link
              href={"/cart"}
              className="relative flex items-center gap-x-2 px-3 xl:px-8 py-1 xl:py-2 bg-stone-900 hover:bg-rose-700 text-white rounded-3xl font-medium"
            >
              <BsCart4 />
              Cart
              <span className="absolute -top-1 -right-1 bg-primary text-white text-sm p-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            </Link>
          </>
        )}
        {status === "unauthenticated" && (
          <div className="m-2 flex gap-x-4">
            <Link
              className="px-4 xl:px-8 py-1 xl:py-2 hover:bg-rose-700 border border-primary rounded-3xl"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="px-4 xl:px-8 py-1 xl:py-2 bg-primary hover:bg-rose-700 border-black border text-white rounded-full"
            >
              Register
            </Link>
                <Link
              href={"/cart"}
              className="relative flex items-center gap-x-2 px-3 xl:px-8 py-1 xl:py-2 bg-stone-900 hover:bg-rose-700 text-white rounded-3xl font-medium"
            >
              <BsCart4 />
              Cart
              <span className="absolute -top-1 -right-1 bg-primary text-white text-sm p-1 rounded-full leading-3">
                {cartProducts.length}
              </span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
