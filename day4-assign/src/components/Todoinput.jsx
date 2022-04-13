import React from 'react'
import { useState } from 'react'
import "./Todo.css"
export const Todoinput = ({getdata}) => {
    const [text,setText]=useState("")
  return (
    <div> 
        <input className="inp" type="text" placeholder='write something' onChange={(e)=>{setText(e.target.value)}} />
        <button className="inpbtn" onClick={()=>{getdata(text)}}>+</button>
        {/* {text} */}
    </div>
   
  )
}
