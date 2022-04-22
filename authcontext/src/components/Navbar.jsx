import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

export const Navbar = () => {
    const {toggleAuth,isAuth} = useContext(AuthContext)
  return (
    <div>
        <nav style={{
            background:"Teal",
            color:"whitesmoke",
           width:"95%",
           margin:"auto",
           display:"flex",
           justifyContent:"right",
           padding:"10px"


        }}><button onClick={()=>toggleAuth(!isAuth)}
        style={{
            background:"black",
            color:"whitesmoke",
            padding:"10px",
            
            
           

        }}
           >
            login/logout
            </button></nav>
    </div>
  )
}