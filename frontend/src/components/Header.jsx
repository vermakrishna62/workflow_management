// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = ({ msgval }) => {
  return (
    <>
      <h1>Welcome to My Animated Page {msgval}</h1>
      <Link to="/logout">Logout</Link>
    </>
  );
};

export default Header;
