import { FaBars, FaTimes } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png"
import { useContext } from "react";
import { useEffect, useState } from "react";

export default function Nav({ total, cart }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const openNavPhone = () => {
    if (
      document.querySelector(".navPhone").classList.contains("closeNavHandler")
    ) {
      document.querySelector(".navPhone").classList.remove("closeNavHandler");
      document.querySelector(".navPhone").classList.add("openNavHandler");
    }
  };
  const closeNavPhone = () => {
    if (
      document.querySelector(".navPhone").classList.contains("openNavHandler")
    ) {
      document.querySelector(".navPhone").classList.remove("openNavHandler");
      document.querySelector(".navPhone").classList.add("closeNavHandler");
    }
  };

  return (
    <>
      <div className="navPhone closeNavHandler">
        <div onClick={closeNavPhone} className="closeNavPhone">
          {" "}
          <FaTimes />{" "}
        </div>
        <ul className="navPhoneList">
          <li className="navPhoneListItem">
            <NavLink className="navLink" to="/FashionEcommerce/">
              Home
            </NavLink>
          </li>
          <li className="navPhoneListItem">
            <NavLink className="navLink" to="/">
              {" "}
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <nav
        className={`navContainer flex justify-between items-center ${
          isFixed ? "isFixed" : ""
        }`}
      >
        <div onClick={openNavPhone} className="openNavPhone">
          <FaBars />
        </div>
        <div className="navLogo">
          <a href="/FashionEcommerce/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <ul className="navLinks flex justify-center items-center gap-12">
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/">
              About Us
            </NavLink>
          </li>
          <a href="/cart" className="navCart_c">
            <span className="navCart flex justify-center items-center gap-2">
              <span style={{ fontSize: "1.2rem", position: "relative", display:"inline-block"}}>
                <CgShoppingCart />
                  <span className="cartCount absolute -top-1 -right-2 bg-red-500 text-white font-bold">
                    {cart.length}
                  </span>
              </span>
            </span>
          </a>
        </ul>
      </nav>
    </>
  );
}
