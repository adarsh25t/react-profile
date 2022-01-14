import React,{useState} from "react";
import "./NavBar.css";

const NavBar = ()=>{

    const [showNav,setShowNav] = useState(false)

    const showNavbarHandler = ()=>{
        setShowNav(!showNav)
    }


    return(
        <div className="nav">
            <h1>ADA<span>RSH</span>. T</h1>
            <i class={showNav ?"fas fa-times" : "fas fa-bars"} onClick={showNavbarHandler}></i>
            <ul className={showNav ?"nav-list activeNav" : "nav-list"}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skill</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}
export default NavBar;