"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const path = usePathname()
  const blackList = ["/sign-in", "/sign-up"];

  const dontShowFooter = blackList.includes(path);
  return (
    !dontShowFooter && (
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Image
                src={"/logo.svg"}
                height={40}
                width={40}
                alt="Website Logo"
              />
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
