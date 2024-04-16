"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'

/**
 * Header Component
 * 
 * This component represents the header section of the website.
 * It contains the navigation links and a mobile menu toggle.
 */

const Header = () => {

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed
    ? "fixed bg-white"
    : "absolute bg-transparent text-white";

  const pathname = usePathname();

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
    <header className={`${headerClassName} transition-all ease-linear top-0 z-50 w-full  shadow-sm`}>
      <div className="flex items-center justify-between w-full px-3 py-3 mx-auto max-w-7xl">
        <div className="w-2/3 md:w-1/3 lg:w-1/6">
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
            <li className="inline-block">
              <Link href="/" className={` px-4 py-2 font-medium ${pathname === '/' ? 'text-white transition-all duration-300 ease-linear border rounded-2xl bg-indigo-500 border-indigo-500' : 'border border-transparent'}`}>
                Home
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link href="/about" className={` px-4 py-2 font-medium ${pathname === '/about' ? 'text-white transition-all duration-300 ease-linear border rounded-2xl bg-indigo-500 border-indigo-500' : 'border border-transparent'}`}>
                About us
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link href="/services" className={` px-4 py-2 font-medium ${pathname === '/services' ? 'text-white transition-all duration-300 ease-linear border rounded-2xl bg-indigo-500 border-indigo-500' : 'border border-transparent'}`}>
                Our Services
              </Link>
            </li>
            <li className="inline-block mx-2">
              <Link href="/solutions" className={` px-4 py-2 font-medium ${pathname === '/solutions' ? 'text-white transition-all duration-300 ease-linear border rounded-2xl bg-indigo-500 border-indigo-500' : 'border border-transparent'}`}>
                Network Solutions
              </Link>
            </li>
            <li className="inline-block">
              <Link href="/contact" className={` px-4 py-2 font-medium ${pathname === '/contact' ? 'text-white transition-all duration-300 ease-linear border rounded-2xl bg-indigo-500 border-indigo-500' : 'border border-transparent'}`}>
                Contact Us
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
