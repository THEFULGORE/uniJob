import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="footer__title">
          Made with ❤ by{" "}
          <a
            className="font-semibold text-md text-fuchsia-500 hover:text-fuchsia-700"
            href="https://github.com/THEFULGORE"
            target="_blank"
            rel="noreferrer"
          >
            Arthur&nbsp;
          </a>
          and&nbsp;
          <a
            className="font-semibold text-md text-fuchsia-500 hover:text-fuchsia-700"
            href="https://github.com/Danlinga"
            target="_blank"
            rel="noreferrer"
          >
            Dana
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
