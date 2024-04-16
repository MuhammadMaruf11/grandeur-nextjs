/**
 * Footer Component
 *
 * This component represents the footer section of the website.
 * It displays various sections including USA Underwriter information, support details,
 * and contact information.
 */

import { servicesData } from "@/allData/servicesData";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className=" bg-[url('/img/bg/footer-bg.svg')] bg-center bg-cover bg-no-repeat bg-black">
      <div className="py-8 md:py-12 backdrop-blur-sm">
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
              {servicesData?.map((data, index) => {
                return (
                  <li key={index} className="mb-2">
                    <i className="fa-sharp fa-solid fa-galaxy text-theme-2 animate-[spin_2.5s_linear_infinite]"></i>&nbsp;
                    {data.title}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="px-3 text-white">
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link href='/about'>About Us &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/services'>Our Services &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/solutions'>Network Solutions &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/contact'>Contact Us &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/terms'>Terms &amp; Condition &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
              <li className="mb-2">
                <Link href='/privacy'>Privacy &amp; Policy &nbsp; <i className="fa-sharp fa-solid fa-arrow-up-right-from-square fa-beat-fade"></i></Link>
              </li>
            </ul>
          </div>
          <div className="px-3 text-white">
            <h3 className="mb-3 text-lg font-semibold">Address</h3>
            <ul>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-location-dot text-theme-2"></i> &nbsp;
                Headquarters DIP, 17036, AE
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-phone text-theme-2"></i>&nbsp;
                +1 1223 3445
              </li>
              <li className="mb-2">
                <i className="fa-sharp fa-solid fa-envelope text-theme-2"></i> &nbsp;
                info@grandeurae.com
              </li>
            </ul>
            <ul className="mt-8 text-theme-2">
              <li className="inline-block mr-6">
                <Link target="_blank" href='https://www.facebook.com/' area-label='facebook'>
                  <i className="fa-brands fa-facebook-square fa-2xl"></i>
                </Link>
              </li>
              <li className="inline-block mr-6">
                <Link target="_blank" href='https://www.instagram.com' area-label='instagram'>
                  <i className="fa-brands fa-instagram-square fa-2xl"></i>
                </Link>
              </li>
              <li className="inline-block mr-6">
                <Link target="_blank" href='https://www.linkedin.com' area-label='linkedin'>
                  <i className="fa-brands fa-linkedin fa-2xl"></i>
                </Link>
              </li>
              <li className="inline-block">
                <Link target="_blank" href='https://www.twitter.com' area-label='twitter'>
                  <i className="fa-brands fa-twitter-square fa-2xl"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-xs text-white lg:text-sm backdrop-blur-sm">
        <div className="justify-between py-4 mx-auto text-center md:text-start px-3 max-w-7xl md:flex">
          <p className="hidden md:block">
            Copyright 2022 Grandeur  <br className="block md:hidden" />
            All Rights Reserved
          </p>
          <p>Design &amp; Developed by <Link className="text-theme-2 font-bold" target="_blank" href='https://digitaldecoderltd.com/'>Digital Decoder Ltd.</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
