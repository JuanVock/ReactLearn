import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Wordle">Wordle</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
