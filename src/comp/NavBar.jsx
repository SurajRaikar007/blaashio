import React from 'react'
import './NavBar.css'
import { FaBell,FaSearch ,FaReact} from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";


const NavBar = () => {
  return (
    <div>
        <nav>
          <div id='nav-left'>
    <h4>Design Studio</h4>
    </div>
    <div id='nav-right'>
    <div id='n1'>
        <MdOutlineContactSupport   color='rgb(0,108,255)'/>
        Support Request</div>
    <div id='n1'><FaReact color='rgb(0,108,255)'/>Product Tour</div>
    <div id='inp'>
    <input  type='text' placeholder='Search Project....'  />
    <FaSearch/>
    </div>
    
    <div id='n2'>
        <FaBell/>
    </div>
    <div id="ln">
    <img src="https://th.bing.com/th?id=ORMS.ed1d7cda8fa225c31cad73d63ddcbf46&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="" />
   <p>Suraj N Raikar</p>
   </div>
   </div>
        </nav>
 </div>
  )
}

export default NavBar