import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gray-800 text-gray-100 p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Juan
            Vock AG Switzerland
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
