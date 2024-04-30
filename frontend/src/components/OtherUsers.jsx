import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers";
import { useSelector } from "react-redux";

export default function OtherUsers() {
  useGetOtherUsers();
  const {OtherUsers} =useSelector(store=>store.user);
  if(!OtherUsers) return;  //early return in react
  return (
    <div className="overflow-auto flex-1">
      {
        OtherUsers?.map((user)=>{
          return (
            <OtherUser key={user._id} user={user}/>
          )
        })
      }
    </div>

  );
}
