import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export const Login = () => {
  //  use reqres to log user in.
const {isAuth,toggleAuth,token} = useContext(AuthContext)
console.log(token)
const handleAuth =(el)=>
{
el.preventDefault()
toggleAuth(!isAuth)
}

  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit"  onClick={handleAuth}/>
    </form>
  );
};