import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleauth } from "../Redux/actions";

export const NewOrder = () => {

const auth = useSelector(store => store.isLoggedIn)
    const dispatch = useDispatch();
if(!auth)
{
  dispatch(toggleauth(true))
}


  let ownerName = localStorage.getItem("userName")
  const [owner, setowner] = useState([])
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    console.log(owner)
    useEffect(()=>
    {
      getdata()
    },[])

    const getdata=()=>
    {
      axios.get(`http://localhost:8080/orders?q=${ownerName}`)
              .then(res => {
                const result = res.data;
                
                setowner(result)
               
              })
    }
    const [form,setForm] = useState({
      "owner-name" : ownerName,
      "problem":"",
      "brand":"",
      "status":"Not Accepted"

    })
    const postproblem=()=>
    {
      axios.post(`http://localhost:8080/orders`,  form )
      .then(res => {
        console.log(res);
      //   console.log(res.data);

      }).then(getdata)
  }
    const handleInput = (e)=>
    {
      const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    }
    
    
    return (
      <div>
        <div className="form">
          <input
            className="new-problem"
            type="text"
            name="problem"
            placeholder="Enter problem"
            onChange={handleInput}
          />
          {/* This input is readonly, it's coming from redux */}
          <input
            className="owner-name"
            type="text"
            name="owner_name"
            placeholder="yourname"
            value={ownerName}
            readOnly
          
          />
          <input
            className="brand"
            type="text"
            name="brand"
            placeholder="Enter brand name"
            onChange={handleInput}
          />
          {/* Create new problem, show it in below form immediately */}
          <button className="submit" onClick={postproblem}>submit</button>
        </div>
  
        <div className="pastOrders">
          {/* this button filters the data below. */}
          {/* it's just a toggle of redux state something like `showUnfinished`  */}
          <button className="filter">
            {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
          </button>
  
          {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
          {owner.map((e)=>
          (
            <div className="past-orders">
            <span className="id">{e.id}</span>. <span className="problem">{e.problem}</span>{" "}
            <span className="cost">
              {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
              {e.status=="Not Accepted" ? null : `$ ${e.cost}`}
            </span>
            <p className="status">Status:{e.status} </p>
            <hr />
          </div>
          ))}
          
        </div>
      </div>
    );
          }