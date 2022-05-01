import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { addTodo } from '../Redux/action';

export const Showtitle = () => {
  const [obj,setobj] =useState([])
 

    const {id}=useParams()
    useEffect(()=>{
        getdata()
     },[])
    
    const getdata=async()=>{
     let res = await fetch(`http://localhost:8080/todos/${id}`)
     let data =await res.json()
    setobj(data)
    }
    console.log(obj)
  return (
    <div>Showtitle
      <p> {obj.title}</p>

    </div>
  )
}
