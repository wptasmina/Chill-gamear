import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#292929] text-white py-10 ">
      <div className="container w-11/12 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-10 md:gap-0">
          {/* Branding */}
          <div className="md:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} className="w-16" />
              <span className="ml-1 text-xl text-white opacity-30 font-extrabold">PHARADH GMs.</span>
            </a>
            <p className="text-gray-500 pt-3 pl-4 font-bold">
              These games offer relaxing experiences through exploration,
              story-driven quests, and light combat. Players can progress at
              their own pace.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4 text-center md:text-right pt-4">
            <h3 className="text-xl text-center font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-2 bg-white text-black rounded-full hover:bg-gray-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
          <div className="bg-[#5b5d5d] mt-8">
        <div className="container mx-auto py-4">
          <p className="text-white/50 text-md font-semibold text-center">
            © 2024 Chill Gamer —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-500 ml-1"
              target="_blank"
            >
              @PHARADH GMs.
            </a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
