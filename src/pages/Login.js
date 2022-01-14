import React from 'react'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Login = () => {

    const [userInfor, setUserInfor ]= useState({
        username : " ",
        password : '',
    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleLogin= async () => {
        try {
            await localStorage.setItem("username",JSON.stringify( userInfor.username));  
            history.replace(from);
        } catch (err){
            console.log(err);
        }
    };

    return (
        <div className="border border-pink-500 rounded-xl w-72 mx-auto flex flex-col items-start h-60 mt-40 p-5">
            <h1>Welcome back!</h1>  
            <div>
            <input className="border border-pink-300 rounded-xl py-1 w-full my-3" 
            name="username"
             placeholder="Your username..." 
            value={userInfor.username} 
            onChange={(e) => setUserInfor({...userInfor, username : e.target.value})}></input>       

            <input className="border border-pink-300 rounded-xl py-1 w-full my-3" 
            name="password"
             placeholder="Your password..." 
            type="password"
            value={userInfor.password} 
            onChange={(e) => setUserInfor({...userInfor, password : e.target.value})}></input>             
            </div>
        <button onClick={()=>handleLogin()}
         className='bg-pink-300 px-5 py-2 text-white font-bold text-xl '>Login</button>
        
        </div>

    )
}

export default Login
