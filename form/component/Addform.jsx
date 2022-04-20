import { useState } from "react";
import {nanoid} from "nanoid"

const Addform = () => {
    const [form, setForm]=useState({
        id: nanoid(),
       name: "",
       Address: "",
        department   :"",
        salary: "",
        age: "",
      martial_status:"",
      
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
            fetch("http://localhost:8080/students",{
                  method: "POST",
                  headers: {
                      "content-type" : "application/json"
                  },
                  body: JSON.stringify(form)
              })
    
    
    }

    function refreshPage() {
      window.location.reload(false);
    }
  return (
    <div>
       
      <form className="addstudent" onSubmit={handlesubmit}>
        <div>
          name:{" "}
          <input
          onChange={handlechange}
            type="text"
            name="name"
            className="first_name"
            placeholder="enter first name"
            id="name"
          />
        </div>
        <div>
          {" "}
          Address:
          <input
           onChange={handlechange}
            type="text"
            name="Address"
            className="Address"
            placeholder="enter last name"
           id="Address"
          />
        </div>
        {/* <div>
          {" "}
         department:
          <input
           onChange={handlechange}
            type="department"
            name="department"
            className="department"
            placeholder=" department"
           id="department"
          />
        </div> */}
        <div>
        <select
                     onChange={handlechange}
                    name="department">
                    <option value="">--</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select>

        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
           married
            <input
             onChange={handlechange}
              name="martial_status"
              id="martial_status"
              className="male"
              type="checkbox"
              value={"male"}
            />{" "}
           Unmarried{" "}
            <input
             onChange={handlechange}
              name="martial_status"
              id="martial_status"
              className="female"
              type="checkbox"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Salary{" "}
          <input
           onChange={handlechange}
            type="number"
            name="salary"
            className="salary"
            placeholder="salary"
            id="salary"
           
          />
        </div>
        <div>
          age:{" "}
          <input
           onChange={handlechange}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            id="age"
            min="0"
            max="100"
          />{" "}
        </div>
       
        <div>
         
        </div>
  
        <input className="submit" type="submit" value="Submit" onClick={refreshPage}/>
       
      </form>
   
  
    </div>
  )
}

export default Addform