import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="px-10 md:px-20">
      <div className=" mt-5 md:mt-16 ">
        <ul className="social flex justify-center md:justify-start md:px-40 gap-4">
          <li className="hover:text-gray-400 transition-all duration-300 hover:scale-105">
            <a href="#">
              <FaFacebook size={23} />
            </a>
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 hover:scale-105">
            <a href="#">
              <IoLogoInstagram size={28} />
            </a>
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 hover:scale-105">
            <a href="#">
              <FaXTwitter size={23} />
            </a>
          </li>
          <li className="hover:text-gray-400 transition-all duration-300 hover:scale-105">
            <a href="#">
              <IoLogoYoutube size={23} />
            </a>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row text-center md:text-left justify-around md:mx-16 mt-8">
          <ul className="mb-5 border-b md:border-none border-gray-600 pb-3 md:pb-0">
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Audio Description</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Investor Relations</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Legal Notices</a>
            </li>
          </ul>
          <ul className="mb-5 border-b md:border-none border-gray-600 pb-3 md:pb-0">
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Help Centre</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Job</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>
          <ul className="mb-5 border-b md:border-none border-gray-600 pb-3 md:pb-0">
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Gift Cards</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Terms of use</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Corporate Information</a>
            </li>
          </ul>
          <ul className="mb-5 border-b md:border-none border-gray-600 pb-3 md:pb-0">
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Media Centre</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Privacy</a>
            </li>
            <li className="text-sm hover:text-orange-700 transition-all duration-300">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <p className="text-sm text-gray-200 my-2 text-center md:text-left md:pl-40">
          © 1997-2024 Netflix, Inc
        </p>
      </div>
    </div>
  );
}

export default Footer;
