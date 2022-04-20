import React from 'react'
import { useState ,useEffect } from "react";
const Show = () => {
    const [result,setresult] = useState([])

    useEffect(()=> 
    {
       bulao()
    },[])
    const bulao = async()=>
    {
        let data = await fetch("http://localhost:8080/students")
        let res = await data.json()
        console.log(res)
       setresult(res)
    }


    return (
        <div>
          <div className="controls">
            
           
            
  
  
        
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Age</th>
                
                <th>martial_status</th>
              </tr>
            </thead>
            
            <tbody className="tbody">
              {/* populate all rows like below: */}
              {/* {console.log(result.sort((a,b)=>(Number(a.age)-Number(b.age))))} */}
  
              {result.map((d)=>(
              <tr className="row">
                <td className="first_name">{d.name}</td>
                <td className="last_name">{d.Address}</td>
                <td className="email">{d.department}</td>
                <td className="gender">{d. salary}</td>
                <td className="age">{d.age}</td>
                <td className="tenth_score">{d.martial_status}</td>
               
              </tr>))}
            </tbody>
          </table>
        </div>
      );
    };

export default Show