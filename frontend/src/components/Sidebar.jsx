import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

export default function Sidebar() {
  const navigate=useNavigate();
  const logoutHandler=async()=>{
      try{
         const res=await axios.get(`http://localhost:5000/api/v1/user/logout`);
         navigate("/login")
         toast.success(res.data.message)
      }catch(error){
          console.log(error);
      }
  }
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md bg-white"
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn  bg-zinc-200">
          <FaSearch className="w-6 h-6 outline-none"/>
        </button>
      </form>
      <div className="divider">

      </div>
      <OtherUsers/>
      <div className="mt-2">
        <button onClick={logoutHandler} className="btn btn-sn">
          Logout
        </button>
      </div>
    </div>
  );
}
