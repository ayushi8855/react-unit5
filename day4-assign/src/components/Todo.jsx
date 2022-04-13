import React from "react";
import "./Todo.css"
import { useState } from "react";
import { Todoinput } from "./Todoinput";
import Todoitem from "./Todoitem";
import {nanoid} from "nanoid"
const Todo =()=>{
    const [List,setList ]=useState([])
    const getdata=(todo)=>{
       const payload={
           title:todo,
           status:false,
           id:nanoid(5)
           
       }

        setList([...List,payload])
    }
    const handelstatus=(id)=>{
        console.log(id)
        setList([...List.map(e=>e.id===id ?{...e,status:!e.status}:e)])
    }
    return (
        <div>
             {List.map((e)=>(
        //   <div className="todolist">{e}</div>
        <Todoitem todo={e} handelstatus={handelstatus}/>
       ))}
            <Todoinput getdata={getdata}/>
      
        </div>
    )
}
export default Todo