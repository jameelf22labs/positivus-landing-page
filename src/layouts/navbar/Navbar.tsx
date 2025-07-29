import { useState, type JSX } from "react";
import BrandLogo from "../../assets/images/brand-simple.png";

const Navbar = (): JSX.Element => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 mt-5 start-0 shadow">
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

        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded={isMobileMenuOpen}
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

        <div
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row md:flex items-center justify-between w-full md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col w-full md:flex-row font-medium md:space-x-8 rtl:space-x-reverse border border-gray-100 md:border-0 rounded-lg p-4 md:p-0 mt-4 md:mt-0 bg-gray-50 md:bg-white">
            {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
              (label) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`block py-2 px-3 rounded-sm md:p-0 ${
                      label === "About us" ? " font-medium" : "text-gray-800"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              )
            )}
            <li className="block md:hidden mt-4">
              <button
                type="button"
                className="w-full text-black border h-[50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Request a quote
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex md:order-2">
          <button
            type="button"
            className="text-black border h-[60px] w-[200px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Request a quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
