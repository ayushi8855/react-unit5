import { useEffect, useState } from "react";

export const Home = () => {



  const [show,setshow]=useState([])
  const [count,setcount] = useState(0)
  const [count2,setcount2] = useState(0)
  
   useEffect(()=>
  {
    getdata()
  },[])
 var c =0
 var c2 = 0
  const getdata =async ()=>{
      let res = await fetch("http://localhost:8080/employee") 
      let data = await res.json()
      console.log(data)
      data.map((e)=>
    {
      if(e.status==="terminated")
      {
      c++
      }
      else if(e.status==="promoted")
      {
c2++
      }
    })
   setcount(c)
   setcount2(c2)
      setshow(data)

  }
  
  console.log(count)
  
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // things to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        
        <div>
          Total Employees<span className="totalemp">:{show.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{count}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{count2}</span>
        </div>
        <div>
          Total New: <span className="total_new">{}</span>
        </div>
      </div>
    </>
  );
};