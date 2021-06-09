import React from "react";

const Footer = () => {
  return (
    <footer className="flex mt-10 rounded rounded-b-none items-center justify-center py-3 xl:mx-20 bg-green-600">
      <p className="col-sm" style={{ color: "#FCFCFC" }}>
        &copy;{new Date().getFullYear()} Made By{" "}
        <a href="https://faeruqe-portfolio.web.app/" target="_blank">
          Omar Faruk
        </a>
      </p>
    </footer>
  );
};

export default Footer;
