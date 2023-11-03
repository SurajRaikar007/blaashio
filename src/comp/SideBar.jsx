import React from 'react'
import './SideBar.css'
import {BsFillGridFill,BsImageFill,BsFillCalendarWeekFill} from 'react-icons/bs'
import img from './blaash.jpeg'


const SideBar = () => {
  return (
    <div id='sidebar'>
        <img src={img} alt="" width="180px" height="40px" />
        <div id="elem">   <BsFillGridFill/>  Revenue</div>
        <select><BsImageFill/><option value="">  Shoppable Video</option></select>
        <select><option value=""> <BsImageFill/> Story</option></select>
        <select><option value=""> <BsImageFill/> Live Commerce</option></select>
        <select><option value=""> <BsImageFill/> PlayList Manager</option>
        <option value="">Product PlayList</option></select>
        <select><option value=""> <BsImageFill/> One Click Post</option></select>
        <select><option value=""> <BsImageFill/>Calender</option></select>
        <select><option value=""> <BsImageFill/> Hire Influencer</option></select>
    </div>
  )
}

export default SideBar