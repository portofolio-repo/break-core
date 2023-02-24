import React from "react";
// import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="Navbar ">
      <div className="container bg-black">
        <ul>
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Project</li>
          <li className="nav-link btn">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
