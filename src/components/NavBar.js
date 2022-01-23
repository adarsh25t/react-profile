import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ()=>{

    const [showNav,setShowNav] = useState(false)

    const showNavbarHandler = ()=>{
        setShowNav(!showNav)
    }


    return(
        <div className="nav">
            <NavLink to={"/"} className="link"><h1>A<span>h</span></h1></NavLink>
            <i class={showNav ?"fas fa-times" : "fas fa-bars"} onClick={showNavbarHandler}></i>
            <ul className={showNav ?"nav-list activeNav" : "nav-list"}>
                <li><NavLink to={'/'} className="navlink"><i class="fas fa-home"></i>Home</NavLink></li>
                <li><NavLink to={'/aboutme'} className="navlink"><i class="fas fa-user"></i>About</NavLink></li>
                <li><NavLink to={'/project'} className="navlink"><i class="fas fa-laptop-code"></i>Projects</NavLink></li>
                <li><NavLink to={'/resume'} className="navlink"><i class="fas fa-address-card"></i>Resume</NavLink></li>
                <li><NavLink to={'/contact'} className="navlink"><i class="fas fa-mobile"></i>Contact</NavLink></li>
                <li className="github"><i class="fas fa-code-branch"></i><i class="fas fa-star"></i></li>
            </ul>
        </div>
    )
}
export default NavBar;