import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../Redux/action'

export const Counter = () => {
    const dispatch= useDispatch()
const counter =useSelector((store)=>
  store.counter
)
  return (
    <div><h3>Counter :{counter}</h3>
    <button onClick={()=>{
     dispatch(addCount(1))
    }}>ADD 1</button>
    </div>
  )
}
