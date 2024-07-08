"use client";

import { useCart } from "@/context/CartContext";
import GlobalApi from "@/utils/GlobalApi";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Header: React.FC = () => {
  const { cart, setCart } = useCart();
  const { user } = useUser();
  const [open, setOpen] = useState(false);

  const path = usePathname();
  const blackList = ["/sign-in", "/sign-up"];
  const dontShowHeader = blackList.includes(path);

  const getCartItems = async () => {
    if (user && user.primaryEmailAddress) {
      const res = await GlobalApi.fetchCart();
      const { data } = res.data;
      setCart(data[0]);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [user]);

  return (
    !dontShowHeader && (
      <header className="bg-white sticky top-0 z-[2]">
        <div className="mx-auto flex h-16 max-w-screen-xl shadow-sm items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-teal-600" href="#">
            <span className="sr-only">Home</span>
            <Image src="/logo.svg" alt="Logo Website" width={40} height={60} />
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/products"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-8 items-center relative">
                {user ? (
                  <>
                    <div className="flex gap-2">
                      <ShoppingCart
                        className="text-teal-500"
                        onClick={() => setOpen((prev) => !prev)}
                      />
                      ({cart?.attributes?.products.length || 0})
                    </div>
                    {open && <Cart setOpen={setOpen} />}
                    <UserButton />
                  </>
                ) : (
                  <>
                    <Link
                      className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                      href="/sign-in"
                    >
                      Login
                    </Link>

                    <Link
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                      href="/sign-up"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
