import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Time = () => {
    const [second,setSec]=useState(59)
    const [minute,setMin]=useState(4)
    const [show,setShow]=useState(false)
 useEffect(()=>{
    if(show) {
var id= setInterval(()=>{
   setSec(second-1)

    if(second===0){
        setMin(minute-1)
        setSec(59)
    }
    if(minute===0){
        setSec(0)
        
        clearInterval(id)
    }
},400)}
return()=>clearInterval(id)
 })
  return (
    <div><h1>0{minute}:{second<10 ?"0"+second :second}</h1>
   <button onClick={()=>{
     setShow(true)
   }}>start</button>

   <button onClick={()=>{
     setShow(false)
   }}>stop</button>

<button onClick={()=>{
     setSec(59)
     setMin(4)
   }}>Reset</button>

    </div>
  )
}

export default Time