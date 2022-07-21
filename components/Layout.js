import React from "react";
import Link from "next/link";

function Layout({ children }) {
  return (
    // <div>
    //   <header
    //     role="banner"
    //     className={
    //       "flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm bg-White/80 text-black"
    //     }
    //   >
    //     <div className="flex gap-12">
    //       <Link href="/">
    //         <a className="font-bold">SHOPIFY</a>
    //       </Link>
    //       <Link href="/collections/collection">
    //         <a className="font-bold">Collections</a>
    //       </Link>
    //       <Link href="/products/product">
    //         <a className="font-bold">Products</a>
    //       </Link>
    //     </div>
    //   </header>
    // </div>
    <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
      <div className="">
        <a href="#mainContent" className="sr-only">
          Skip to content
        </a>
      </div>
      <header
        role="banner"
        className={
          "flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm  bg-white/80 text-black"
        }
      >
        <div className="flex gap-12">
          <Link href="/">
            <a className="font-bold">SHOPIFY</a>
          </Link>
          <Link href="/collections/collection">
            <a className="font-bold">Collections</a>
          </Link>
          <Link href="/products/product">
            <a className="font-bold">Products</a>
          </Link>
        </div>
      </header>

      <main role="main" className="container">
        {children}
      </main>
    </div>
  );
}

export default Layout;
