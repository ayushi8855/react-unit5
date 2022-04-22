import { createContext, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children})=>
{
    const [isAuth ,setisAuth] = useState(false)
    const [token,settoken] = useState("")
    const data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };

    const toggleAuth = ()=>
    {
        setisAuth(!isAuth)
        
        if(!isAuth)
        {
            fetch("https://reqres.in/api/login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        .then(data => {
            setisAuth(true);
            settoken(data.token);
        });
        }
    }
    

    return <AuthContext.Provider value={{isAuth,toggleAuth,token}}>{children}</AuthContext.Provider>
}