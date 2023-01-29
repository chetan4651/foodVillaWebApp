import React from "react";
import Logo from "../public/images/Logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return <img src={Logo} width="50" height="50" />;
};

const NavBar = () => {
  return (
    <ul className="flex">
      <li>Home</li>
      <li>About us</li>
      <li>Contact us</li>
    </ul>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between">
      <Title />
      <NavBar />
    </div>
  );
};

export default Header;
