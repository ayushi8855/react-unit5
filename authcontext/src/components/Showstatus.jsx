import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import "./Showstatus.css"

export const Showstatus = () => {
    const {isAuth,token} = useContext(AuthContext)
  return (
    <div className={isAuth ? "login" : "logout"} ><h1>{isAuth ? "Login" : "logout"}</h1>
    <h1>{isAuth ? token : ""}</h1></div>
  )
}