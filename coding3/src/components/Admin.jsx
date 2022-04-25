import { nanoid } from "nanoid";
import { useState } from "react";

export const Admin = () => {
  
  

    const [form, setForm]=useState({
      
        "id": nanoid(4),
        "employee_name": "",
        "employee_id": "",
        "title": "",
        "salary": "",
        "image": "",
        "username": "",
        "password": "",
        "tasks": [],
        "status": "",
        "team": ""
      
      
    })
    const handlechange =(e)=>{
      const {name,value}=e.target

      setForm({
          ...form,
          [name]:value
      })
  }
  const handlesubmit =(e)=>
    {
            e.preventDefault();
            console.log(form)
            fetch("http://localhost:8080/employee",{
                  method: "POST",
                  headers: {
                      "content-type" : "application/json"
                  },
                  body: JSON.stringify(form)
              })
    
    
    }
  


  return (
    <form className="createEmployee" onSubmit={handlesubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name" onChange={handlechange}/>
      <input type="text" placeholder="Employee id" name="employee_id"  onChange={handlechange}/>
      <select name="title" onChange={handlechange}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handlechange}/>
      <input type="text" placeholder="Image" name="image" onChange={handlechange} />
      <input type="text" placeholder="User Name" name="username" onChange={handlechange} />
      <input type="password" placeholder="Password" name="password" onChange={handlechange}/>
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handlechange}
      />
      <select name="status" id="status" onChange={handlechange}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handlechange}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};