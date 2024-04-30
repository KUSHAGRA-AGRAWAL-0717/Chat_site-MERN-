import React from "react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
export default function Signup() {
  const [user, setUser] = useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender: "",
  });
  const navigate=useNavigate();
  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try{
      const res=await axios.post(`http://localhost:3000/api/v1/user/register`,user,{
        headers:{
          'Content-Type': "application/json"
        },
        withCredentials:true
      });
      if(res.data.success){
        navigate("/login")
        toast.success(res.data.message)
      }
    }catch(error){
      toast.error(error.response.data.message);
      console.log(error)
    }
    setUser({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "",
    })
  };
  return (
    <div className="min-w-96 mx-auto flex justify-center items-center">
      <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center text-black">Signup</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col items-center">
            <label className="label p-2 ml-4">
              <span className="text-base label-text text-black">Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
              type="text"
              placeholder="FULL Name"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="label p-2 ml-4">
              <span className="text-base label-text text-black">Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="label p-2 ml-4">
              <span className="text-base label-text text-black">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="label p-2 ml-4">
              <span className="text-base label-text text-black">
                Confirm Password
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="m-full input inputbordered h-10 bg-white text-black placeholder-black m-6 mt-0"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender == "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>
                Female
                <input
                  type="checkbox"
                  checked={user.gender == "female"}
                  onChange={() => handleCheckbox("female")}
                  defaultChecked
                  className="checkbox mx-2"
                />
              </p>
            </div>
          </div>
          <p className="text-center text-black my-2">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
          <div>
            <button
              type="submit"
              className="btn btn-accent btn-block btn-sn mt-3 border border-state-700"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
