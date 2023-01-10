import { Link } from "@remix-run/react";
import { MobileMenu } from "./MobileMenu";
import logo from "~/assets/logo.png";

export function Navbar() {
  return (
    <header className="h-20 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex justify-between">
        {/* Logo link */}
        <Link to="/" className="flex items-center h-full w-fit">
          <img src={logo} alt="diurivj-logo" className="w-16" />
        </Link>

        {/* Desktop Navbar */}
        <nav className="w-full items-center justify-evenly hidden md:flex">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/credits">Credits</Link>
        </nav>

        {/* Mobile Navbar */}
        <div className="md:hidden self-center">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
