import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { addDelete, addTodo, addtoggle } from '../Redux/action';


export const Todo = () => {
    const todos = useSelector(store => store.todos)
    const dispatch = useDispatch();

    useEffect(()=>{
        getdata()
     },[])
    

    const [text, setText] = useState("")
  
    
    
 
    let i = Math.random(Math.floor(10)*5)
    
    const handleAdd = () => {
           const payload =    {
                title: text,
                status: false,
                id : i,
                dele : "delete"
            }
        // fetch ("http://localhost:8080/todos",{
        //     body:JSON.stringify(payload),
        //     headers:{"content-type":"application/json"},
        //     method :"POST"
        // }).then(()=>
        // setText("")
        // ).then(getdata)

        axios.post(`http://localhost:8080/todos`,  payload )
        .then(res => {
          console.log(res);
          console.log(res.data);

        }).then(getdata)
  
    }
    const handledel = (id) => {
        const update = todos.filter((e, i) => {
            return e.id !== id 
        })
        console.log(update)
      
        dispatch(addDelete(update))
    }
    const toggle = (id) => {
       var ntodo =  todos.map((e)=>
        {
           
              if(e.id===id){
                  e.status= !e.status
                  return e
              }
              return e
        })
        console.log(ntodo)
        dispatch(addtoggle(ntodo))
        
    }
 
const getdata=async()=>{
//  let res = await fetch("http://localhost:8080/todos")
//  let data =await res.json()
//  dispatch(addTodo(data))


axios.get(`http://localhost:8080/todos`)
      .then(res => {
        const result = res.data;
        dispatch(addTodo(result));
      })

}
    // console.log(todos)
    return (
        <div>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>ADD todo</button>
            {

                todos.map((t) => (
                    <div key={t.title}> <Link to={`/todo/${t.id}`}>{t.title}</Link> 
                       <button onClick={() => { handledel(t.id) }}>{t.dele}</button>
                       <button onClick={() => { toggle(t.id) }}>{t.status ?"true":"false"}</button>
                       </div>
                ))
            }


        </div>
    )
}
