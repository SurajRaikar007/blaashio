import React, { useEffect, useState } from 'react'
import './Header.css'
import {MdVideoLibrary} from 'react-icons/md'

const Header = () => {

  const [app, setApp] = useState([]);

  useEffect(() => {
    var raw = JSON.stringify({
      Index: 1,
      ContentType: [2],
      IsTagged: false,
      URL: "",
    });

    var requestOptions = {
      method: "POST",
      headers:{
        "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
        "X-Tenant-Key": "INDU140923",
        "Content-Type": "application/json",
      },
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setApp(result.data.Feeds))
      .catch((error) => console.log("error", error));
  }, []);

  
  return (
    
   


    <div>
      {
        console.log(app)
      }
        <div className='head'>
          <div id='box'>
          {/* {
    app.slice(0,6).map((list)=>{
      <div>
      <h1>{list.Thumbnail_Title}</h1>
      <img src={list.Thumbnail_URL} alt="" />
      </div>
    })
  } */
}
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>
          <div id='box'>
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>
          <div id='box'>
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>
          <div id='box'>
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>
          <div id='box'>
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>
          <div id='box'>
            <div id='box-bot'>  <MdVideoLibrary/>  5 videos</div>
          </div>

        </div>
    </div>
  )
} 

export default Header