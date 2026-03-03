import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  return (
    
    /*<!-- Include this script tag or install `@tailwindplus/elements` via npm: -->*/
    /*<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->*/
    <nav className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button-->*/}
            <button
              type="button"
              command="--toggle"
              commandfor="mobile-menu"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 in-aria-expanded:hidden"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6 not-in-aria-expanded:hidden"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={Logo} alt="Your Company" className="h-8 w-auto" />
            </div>

            {/* <!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> --> */}
        <el-dropdown className="inline-block ml-6">
        <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#019376] shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50">
            Grocery
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="-mr-1 size-5 text-gray-400">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
        </button>

        <el-menu anchor="bottom end" popover className="w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
            <div className="py-1">
                
            <a href="#" aria-current="page" className="rounded-md px-3 py-2 text-sm font-medium text-[#1F2937] hover:text-[#019376]">Grocery</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Bakery</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Makeup</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Bags</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Clothing</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Furniture</a>
            <a href="#" className="block px-4 py-2 text-sm text-[#1F2937] hover:text-[#019376]">Daily Needs</a>
            <form action="#" method="POST">
            </form>
            </div>
        </el-menu>
        </el-dropdown>


            <div className="hidden sm:ml-auto sm:block">
              <div className="flex space-x-4">
                {/*<!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->*/}
                <a
                  href="#"
                  aria-current="page"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1F2937] hover:text-[#019376]"
                >
                  Shops
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1F2937] hover:text-[#019376]"
                >
                  Offers
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1F2937] hover:text-[#019376]"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1F2937] hover:text-[#019376]"
                >
                  Pages
                </a>
              </div>
            </div>
          </div>
          {!isLoggedIn ?<button onClick={() => {navigate("/login")}} className="bg-[#019376] text-white px-4 py-2 rounded-2xl cursor-pointer">Login</button> : <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/*<!-- Profile dropdown -->*/}
            <el-dropdown className="relative ml-3">
              <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </button>

              <el-menu
                anchor="bottom end"
                popover
                className="w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                >
                  Your profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:outline-hidden"
                >
                  Sign out
                </a>
              </el-menu>
            </el-dropdown>
          </div>}
        </div>
      </div>

      <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/*<!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->*/}
          <a
            href="#"
            aria-current="page"
            className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </el-disclosure>
    </nav>
  );
};

export default Header;
