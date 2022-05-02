import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();
    const [form, setForm] = useState({
      username: "",
      password: "",
    });
  
    const [data, setData] = useState([]);
  
    const getData = () => {
      axios
        .get("http://localhost:8080/users")
        .then((response) => setData(response.data));
    };
  
    const handlechange = (e) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
  
    const handleLogin = () => {
      console.log(data);
      console.log(form);
  
      data.map((e) => {
        if(form.username == "admin" && e.pass == form.password){
            navigate("/orders")
          } else{
            if(e.username == form.username && e.pass == form.password){
              localStorage.setItem("userName",e.username)
              navigate("/neworder")
            }
          }
    });
}  
    useEffect(() => {
      getData();
    }, []);





    return (
      <div>
        <input
        onChange={handlechange}
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input
          onChange={handlechange}
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        <button className="submit" onClick={handleLogin}>Login</button>
      </div>
    );
    }