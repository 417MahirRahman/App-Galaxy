import React from "react";

const Footer = () => {
  return (
    <div>
        
      <div>
        <footer className="footer sm:footer-horizontal bg-[#001931] text-[#FFFFFF] md:gap-10 md:px-5 lg:px-15 py-10">

          <div className="w-full flex flex-col items-center md:items-start">
            <h6 className="footer-title">Useful Links</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Services</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
          </div>

          <nav className="w-full flex flex-col items-center md:items-start">
            <h6 className="footer-title">Product Help</h6>
            <a className="link link-hover">FAQ</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms and Conditions</a>
            <a className="link link-hover">Support</a>
          </nav>

          <form className="w-full flex flex-col items-center md:items-start">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80 flex flex-col items-center space-y-1 md:items-start">
              <label>Enter your email address:</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@gmail.com"
                  className="input input-bordered text-black"
                />
                <a className="btn btn-primary">Subscribe</a>
              </div>
            </fieldset>
          </form>

        </footer>

        <footer className="footer sm:footer-horizontal footer-center bg-[#001931] text-[#FFFFFF] p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              App Galaxy
            </p>
          </aside>
        </footer>

      </div>

    </div>
  );
};

export default Footer;
