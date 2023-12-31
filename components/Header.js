'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fade-down fixed left-0 right-0 top-0 z-40">
      <nav className="main-nav bg-white">
        <div className="container mx-auto px-4 xl:max-w-6xl">
          <div className="lg:flex lg:justify-between">
            <div className="flex justify-between">
              <div className="mx-w-10 flex items-center text-4xl font-bold capitalize text-gray-900">
                Logo
              </div>
              {/* mobile nav */}
              <div className="flex flex-row items-center py-4 lg:py-0">
                <div className="relative block text-gray-900 hover:text-black lg:hidden">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    type="button"
                    className="menu-mobile block border-b-2 border-transparent px-6 py-3"
                  >
                    <span className="sr-only">Mobile menu</span>
                    <svg
                      className="open h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="close bi bi-x-lg h-8 w-8"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-row">
              {/* nav menu */}
              {/* <ul className="navbar bg-white lg:bg-transparent w-full hidden text-center lg:text-left lg:flex lg:flex-row text-gray-900 text-sm items-center font-bold"> */}
              <ul
                className={clsx(
                  'navbar w-full items-center bg-white text-center text-sm font-bold text-gray-900 lg:flex lg:flex-row lg:bg-transparent lg:text-left',
                  mobileMenuOpen ? '' : 'hidden',
                )}
              >
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="active block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#hero"
                  >
                    Home
                  </Link>
                </li>
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#services"
                  >
                    What we do
                  </Link>
                </li>
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#portfolio"
                  >
                    Our works
                  </Link>
                </li>
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#clients"
                  >
                    Clients
                  </Link>
                </li>
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#team"
                  >
                    Team
                  </Link>
                </li>
                <li className="relative hover:text-black">
                  <Link
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="block border-b-2 border-transparent px-6 py-3 lg:py-7"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
