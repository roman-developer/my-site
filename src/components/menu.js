import * as React from "react"
import { Link } from "gatsby"
import "./menu.css"
import { BsFillPersonFill, BsFillHouseFill, BsFillBriefcaseFill, BsFillFileEarmarkCodeFill } from "react-icons/bs";

const Menu = () => (
  <ul id="menuComponent" className="menu" style={{display: "none"}}>
    <li><BsFillHouseFill /> <Link className="menuItem" to="/">Home</Link></li>
    <li><BsFillPersonFill /> <Link className="menuItem" to="/about/">Mi perfil</Link></li>
    <li><BsFillBriefcaseFill /> <Link className="menuItem" to="/experience/">Experiencia</Link></li>    
    <li><BsFillFileEarmarkCodeFill /> <Link className="menuItem" to="/projects/">Proyectos</Link></li>
  </ul>
)

export default Menu
