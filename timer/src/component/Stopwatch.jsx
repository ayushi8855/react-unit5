import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Stopwatch = () => {
    const [second,setSec]=useState(0)
    const [minute,setMin]=useState(0)
    const [hour,setHr]=useState(0)
    const [show,setShow]=useState(false)
 useEffect(()=>{
    if(show) {
var id= setInterval(()=>{
   setSec(second+1)

    if(second===59){
        setMin(minute+1)
        setSec(0)
    }
    if(minute===59){
        setHr(hour+1)
        setMin(0)
        
        clearInterval(id)
    }
},100)}
return()=>clearInterval(id)
 })
  return (
    <div><h1>0{hour}:{minute<10 ?"0"+minute:minute}:{second<10 ?"0"+second :second}</h1>
   <button onClick={()=>{
     setShow(true)
   }}>start</button>

   <button onClick={()=>{
     setShow(false)
   }}>stop</button>

<button onClick={()=>{
     setSec(0)
     setMin(0)
   }}>Reset</button>

    </div>
  )
}

export default Stopwatch