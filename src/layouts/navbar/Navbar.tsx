import { type JSX } from "react";
import BrandLogo from "../../assets/images/brand-simple.png";

const Navbar = (): JSX.Element => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 mt-5 start-0">
      <div className="max-w-[110rem] flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://f22labs.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={BrandLogo} className="h-8" alt="Brand Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
            Positivus
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black border h-[60px] w-[200px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Request a quote
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-blue-600 font-medium rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:text-blue-600 rounded-sm md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:text-blue-600 rounded-sm md:p-0"
              >
                Use Cases
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:text-blue-600 rounded-sm md:p-0"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-800 hover:text-blue-600 rounded-sm md:p-0"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
