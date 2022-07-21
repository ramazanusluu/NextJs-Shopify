import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <header
        role="banner"
        className={
          "flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm bg-White/80 text-black"
        }
      >
        <div className="flex gap-12">
          <Link href="/">
            <a className="font-bold">SHOPIFY</a>
          </Link>
          <Link href="/collections/collection">
            <a className="font-bold">Collections</a>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
