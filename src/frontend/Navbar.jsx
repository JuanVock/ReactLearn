import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <Link to="/" className="btn btn-ghost text-xl">
        Home
      </Link>
      <Link to="/NumberGuesser" className="btn btn-ghost text-xl">
        NumberGuesser
      </Link>
      <Link to="/wordle" className="btn btn-ghost text-xl">
        Wordle
      </Link>
    </div>
  );
};

export default Navbar;
