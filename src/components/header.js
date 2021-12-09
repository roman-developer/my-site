import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Menu from "./menu"
import { FaBars } from 'react-icons/fa';
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
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
