import * as React from "react"
import { Link } from "gatsby"
import "./menu.css"
import { BsFillPersonFill, BsFillHouseFill, BsFillBriefcaseFill, BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

const Menu = () => (
  <div id="menuComponent" class="menu" style={{display: "none"}}>
    <div class="menu-container">
      <div class="menu-col-1">
        <BsFillHouseFill /> <Link className="menuItem" to="/">Home</Link>
      </div>
      <div class="menu-col-2">
        <BsFillPersonFill /> <Link className="menuItem" to="/about/">Mi perfil</Link>
      </div>
      <div class="menu-col-3">    
        <BsFillBriefcaseFill /> <Link className="menuItem" to="/experience/">Experiencia</Link>
      </div> 
      <div class="menu-col-4">
        <BsFillFileEarmarkCodeFill /> <Link className="menuItem" to="/projects/">Proyectos</Link>
      </div>
      <div class="menu-col-5">
        <FaUniversity /> <Link className="menuItem" to="/education/">Formación</Link>
      </div>
    </div>
  </div>
)

export default Menu
