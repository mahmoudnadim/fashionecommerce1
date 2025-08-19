import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/Logo.png"

export default function Footer() {
  return (
    <div className="CP footer flex flex-col md:flex-row justify-between items-center w-full">
      <div className="footerMainList sm:w-full md:w-2/5 flex flex-col gap-6">
        <div className="footerLogo">
          <a href="/CoffeeShop">
          <img src={Logo} alt="" />
          </a>
        </div>
        <p className="footerDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="footerSub flex flex-col gap-2">
          <p className="footerSubsText">Subscribe Our Newsletter</p>
          <div className="footerSubsInputs flex align-items-center">
            <input type="text" placeholder="Enter Your Email" />
            <button className="btn footerBtn">Send</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-30 sm:w-full md:w-3/5" >
        <div className="footerList">
          <p className="footerListTitle">SHOP</p>
          <div className="footerLinks d-flex flex-column">
            <a className="footerLink" href="/">
              All Collections
            </a>
            <a className="footerLink" href="/">
              Winter Edition
            </a>
            <a className="footerLink" href="/">
              Discount
            </a>
          </div>
        </div>
        <div className="footerList">
          <p className="footerListTitle">COMPANY</p>
          <div className="footerLinks d-flex flex-column">
            <a className="footerLink" href="/">
              About Us
            </a>
            <a className="footerLink" href="/">
              Contact
            </a>
            <a className="footerLink" href="/">
              Affiliates
            </a>
          </div>
        </div>
        <div className="footerList">
          <p className="footerListTitle">SUPPORT</p>
          <div className="footerLinks d-flex flex-column">
            <a className="footerLink" href="/">
              FAQs
            </a>
            <a className="footerLink" href="/">
              Cokkie Policy
            </a>
            <a className="footerLink" href="/">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
