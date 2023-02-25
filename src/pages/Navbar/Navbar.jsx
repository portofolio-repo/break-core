import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <NavLink to="/" className="nav-link text-white">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link text-white">
            About
          </NavLink>
          <NavLink to="/project" className="nav-link text-white">
            Project
          </NavLink>
          <NavLink to="/contact" className="nav-link text-white">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
