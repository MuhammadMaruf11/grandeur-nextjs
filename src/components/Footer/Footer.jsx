/**
 * Footer Component
 *
 * This component represents the footer section of the website.
 * It displays various sections including USA Underwriter information, support details,
 * and contact information.
 */

import Link from "next/link";

const Footer = () => {
 
  return (
    <footer className=" bg-[url('/img/bg/footer-bg.svg')] bg-center bg-cover bg-no-repeat bg-black">
      <div className="py-8 md:py-12">
        <div className="mx-auto text-sm md:grid md:grid-cols-2 max-w-7xl lg:grid-cols-4">
          <div className="px-3 text-white">
            <Link href='/'>
              <img className="w-60" loading="lazy" src="/img/logo/logo.webp" alt="footer" />
            </Link>
            <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur architecto, corrupti adipisci quo, neque eveniet doloremque culpa ad quas voluptates, odio nam aliquam. Cum fugit sint necessitatibus nihil minima temporibus earum provident. Odio, quia? Eos.</p>
          </div>
          <div className="px-3 text-white">
            <h3 className="mb-3 text-lg font-semibold">Our Services</h3>
            <ul>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Billing Software
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Wholesale Mobile &amp; Laptop
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                WiFi Hotspot
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Compouter Systems &amp; Communication Equipment Software Trading
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Computer &amp; Data Processing Requisites Trading
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Mobile Phones &amp; Accessories Trading
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                IT Infrastructure
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Internet Services
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Cloud Services &amp; Datacenters providers
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                Information Technology Network services
              </li>
            </ul>
          </div>
          <div className="px-3 text-white">
            <h3 className="mb-3 text-lg font-semibold">Links</h3>
            <ul>
              <li className="mb-2">
                <Link href='/about-us'>About Us &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/services'>Our Services &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/contact-us'>Contact Us &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
            </ul>
          </div>
          <div className="px-3 text-white">
            <h3 className="mb-3 text-lg font-semibold">Our Services</h3>
            <ul>
              <li>
                <i className="fa-sharp fa-solid fa-clock"></i> Monday
                - Friday, 9:00 am - 6:00 pm ET
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-phone"></i> +1
                (248) 541-2800
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-galaxy animate-[spin_2.5s_linear_infinite]"></i>{" "}
                Customerservice@usaunderwriters.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs text-white lg:text-sm ">
        <div className="justify-between py-4 mx-auto text-center md:text-start px-3 max-w-7xl md:flex">
          <p className="hidden md:block">
            Copyright 2022 Grandeur  <br className="block md:hidden" />
            All Rights Reserved
          </p>
          <p>Created by <Link className="text-theme-2 font-bold" target="_blank" href='https://digitaldecoderltd.com/'>Digital Decoder Ltd.</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
