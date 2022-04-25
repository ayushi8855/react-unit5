import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const {id} = useParams()
  const [detail,setdetail] = useState([])
  console.log(detail)

  useEffect(()=>
  {
   getdetail() 
  },[])
  const getdetail = async ()=>
  {
   let res = await fetch(`http://localhost:8080/employee/${id}`)
   let data = await res.json()
   setdetail([...detail,data])
  }
  // employee_id: "3ec7a664-9948-4099-9829-a8c75deef782"
  // employee_name: "Kial Bengtsen"
  // id: 1
  // image: "http://dummyimage.com/185x177.png/ff4444/ffffff"
  // password: "oJ79pX"
  // salary: 1000
  // status: "working"
  // tasks: ['fixing bugs']
  // team: "frontend"
  // title: "Team Lead"
  // username: "kbengtsen0"

  return (
<>
{detail.map((e)=>
(
  <div className="user_details">
      <img className="user_image" src={e.image} />
      <h4 className="user_name">{e.username}</h4>
      <span className="user_salary">$ {e.salary}</span>
      <span className="tasks">
        {e.tasks.map((el)=>
        (
          <li className="task">{el}</li>
        ))}
       
      </span>
      Status: <b className="status">{e.status}</b>
      Title: <b className="title">{e.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {e.status == "working" ? <button className="fire">Fire Employee</button>: null }
      
      {/* Show this button only if user is not already team lead or terminated */}
      {e.title != "Team Lead" || e.title != "terminated" ? null  : <button className="promote">promote</button>}
      
    </div>
))}
    
    </>
  );
 
};