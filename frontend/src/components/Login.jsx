import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';
export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch=useDispatch()
  const navigate=useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try{
      const res=await axios.post(`http://localhost:5000/api/v1/user/login`,user,{
        headers:{
          'Content-Type': "application/json"
        },
        withCredentials:true
      });
        navigate("/")
        dispatch(setAuthUser(res.data))
    }catch(error){
      toast.error(error.response.data.message);
      console.log(error)
    }
    setUser({
      username: "",
      password: "",
    })
  }
  return (
    <div className="min-w-96 mx-auto flex justify-center items-center">
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-black">Login</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="flex flex-col items-center">
          <label className="label p-2 ml-4">
            <span className="text-base label-text text-black">Username</span>
          </label>
          <input
          value={user.username}
          onChange={(e)=>setUser({...user,username:e.target.value})}
            className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="label p-2 ml-4">
            <span className="text-base label-text text-black">Password</span>
          </label>
          <input
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
            type="password"
            placeholder='Password'
          />
        </div>
        <p className="text-center text-black">
          Don't have any account?
          <Link to="/Signup">SignUp</Link>
        </p>
        <div>
          <button type="submit" className="btn btn-accent btn-block btn-sn mt-3 border border-state-700">
            SignIn 
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
