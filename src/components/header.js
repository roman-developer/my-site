import * as React from "react"
import PropTypes from "prop-types"
// import { Link } from "gatsby"
import Menu from "./menu"
import { FaBars } from 'react-icons/fa';
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <FaBars className="hamburger"onClick={() => toggleMenu()} />
    <Menu/>
  </header>
)

function toggleMenu() {
  let menuComponent = document.getElementById("menuComponent");
  if (menuComponent.style.display === "none") {
    menuComponent.style.display = "block";
  } else {
    menuComponent.style.display = "none";
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
