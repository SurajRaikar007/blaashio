import React from 'react'
import './Section.css'

const Section = () => {
  return (
    <div className='section'>
        Thumbnail Style
        <input type="text" name="" placeholder='Get Sporty in Style' id="" />
        Video status
        <div id='rad'>
      <input type="radio" name='click'/>Active
      <input type="radio" name='click'/>InActive
      </div>
        Product PlayList

        <div id='box2'>
          <div id='box2-right'></div>
          <div id='box2-left'>
            Video Title Name 
            <div id='time'> 4:05:60 </div>
            <div id='box-b'>
              Products Attached : 5
            </div>
        </div>
        </div>
        <div id='box2'>
          <div id='box2-right'></div>
          <div id='box2-left'>
            Video Title Name 
            <div id='time'> 4:05:60 </div>
            <div id='box-b'>
              Products Attached : 5
            </div>
        </div>
        </div>
        <div id='box2'>
          <div id='box2-right'></div>
          <div id='box2-left'>
            Video Title Name 
            <div id='time'> 4:05:60 </div>
            <div id='box-b'>
              Products Attached : 5
            </div>
        </div>
        </div>

    </div>
  )
}

export default Section