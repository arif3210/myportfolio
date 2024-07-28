import React, { useEffect, useState } from 'react'
import './MainText.css'
const MainText = () => {
    const displayText = ['hey there','welcome','to','my','website']
    const [index,setIndex] = useState(0)
    const [show,setShow] = useState(displayText[index])
    const manageClick = ()=>{
      if(index >= 4){
        setIndex(-1)
      }
      setIndex(prev=>prev+1)
      setShow(displayText[index])
    }
  return (
    <div className='maintext-container'>
         <p onClick={manageClick}className='maintext-text'>{show}</p>
    </div>
  )
}

export default MainText