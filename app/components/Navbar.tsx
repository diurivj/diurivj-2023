import { Link } from "@remix-run/react";
import { MobileMenu } from "./MobileMenu";
import logo from "~/assets/logo.png";

export function Navbar() {
  return (
    <header className="h-20 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex justify-between">
        <Link to="/" className="flex items-center h-full w-fit">
          <img src={logo} alt="diurivj-logo" className="w-16" />
        </Link>
        <nav className="w-full items-center justify-evenly hidden md:flex">
          <Link to="/">Link 1</Link>
          <Link to="/">Link 2</Link>
          <Link to="/">Link 3</Link>
          <Link to="/">Link 4</Link>
          <Link to="/">Link 5</Link>
        </nav>

        <div className="md:hidden self-center">
          {/* <button className="border border-black w-8 h-8 flex items-center justify-center shadow-brutalism active:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button> */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
