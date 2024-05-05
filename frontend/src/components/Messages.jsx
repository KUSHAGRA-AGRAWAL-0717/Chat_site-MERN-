import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages.jsx';
import { useSelector } from 'react-redux';

export default function () {
  useGetMessages();
  const {messages}=useSelector(store=>store.message)

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {
        messages && messages?.map((message)=>{
          return(<Message key={message._id} message={message}/>)
        })
      }
    </div>
  )
}
