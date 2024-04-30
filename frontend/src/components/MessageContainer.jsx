import React from "react";
import SendInput from "./SendInput";
import Messages from "./Messages";

export default function MessageContainer() {
  return (
    <div className="md:min-w-[550px] flex flex-col">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://getwallpapers.com/wallpaper/full/f/6/7/563540.jpg"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="">
          <div className="flex justify-between gap-2">
            <p className="text-white">Sonam</p>
          </div>
        </div>
      </div>
      <Messages/>
      <SendInput/>
    </div>
  );
}
