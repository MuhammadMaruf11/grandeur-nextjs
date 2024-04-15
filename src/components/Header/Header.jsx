"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

/**
 * Header Component
 * 
 * This component represents the header section of the website.
 * It contains the navigation links and a mobile menu toggle.
 */

const Header = () => {

  const router = usePathname();


  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  if (menuBtn) {
    mobileMenu = (
      <div className="fixed top-auto z-50 w-full shadow-sm bg-theme">
        <ul className="text-white bg-theme">
          <li className="my-3">
            <Link className="w-full block p-2 my-0.5 text-sm" href="/">
              Home
            </Link>
          </li>
          <li className="my-3">
            <Link className="w-full block p-2 my-0.5 text-sm" href="/about-us">
              About us
            </Link>
          </li>
          <li className="my-3">
            <Link className="w-full block p-2 my-0.5 text-sm" href="/contact-us">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    );

  }
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="flex items-center justify-between w-full px-3 py-3 mx-auto xl:px-0 max-w-7xl">
        <div className="w-full lg:w-1/6">
          <Link href="/">
            <img
              className="mx-auto lg:mx-0"
              src="/img/logo/logo.webp"
              alt="header_logo"
            />
          </Link>
        </div>
        <div className="hidden lg:inline-block text-end">
          <ul className="flex">
            <li className="inline-block mx-4">
              <Link href="/" className={` px-5 py-2 font-medium ${router === '/' ? 'text-white transition-all duration-300 ease-linear border rounded-3xl bg-theme-2 border-theme-2' : ''}`}>
                Home
              </Link>
            </li>
            <li className="inline-block mx-4">
              <Link href="/about-us" className={` px-5 py-2 font-medium ${router === '/about-us' ? 'text-white transition-all duration-300 ease-linear border rounded-3xl bg-theme-2 border-theme-2' : ''}`}>
                About us
              </Link>
            </li>
            <li className="inline-block mx-4">
              <Link href="/contact-us" className={` px-5 py-2 font-medium ${router === '/contact-us' ? 'text-white transition-all duration-300 ease-linear border rounded-3xl bg-theme-2 border-theme-2' : ''}`}>
                Contact Us
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/report-claim" className={` px-5 py-2 font-medium ${router === '/report-claim' ? 'text-white transition-all duration-300 ease-linear border rounded-3xl bg-theme-2 border-theme-2' : ''}`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-3 inline-block cursor-pointer lg:hidden">
          <button
            aria-label="toggle-navbar"
            onClick={() => setMenuBtn(!menuBtn)}
            className="flex flex-col items-center justify-center p-1 border border-theme"
          >
            <img src="/img/icons/toggle.webp" alt="" />
          </button>
        </div>
      </div>
      <div className={menuBtn ? `h-screen w-screen absolute bg-[#00000080]` : ``}>{mobileMenu}</div>
    </header>
  );
};

export default Header;
