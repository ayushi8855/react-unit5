import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const EmployeeList = () => {
  const {id} = useParams()
  const [show,setshow]=useState([])
  useEffect(()=>
  {
    getdata()
  },[])
  const getdata =async ()=>{
      let res = await fetch("http://localhost:8080/employee") 
      let data = await res.json()
      setshow(data)

  }
  return (
    
    <div className="list_container">

      {/* On clicking this card anywhere, user goes to user details */}
      
      {show.map((e)=>(
        <Link to={`/employeeDetails/${e.id}`}>
        <div className="employee_card">
        <img className="employee_image" src={e.image} />
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
      </Link>
      ))}
      
    </div>
  );
};