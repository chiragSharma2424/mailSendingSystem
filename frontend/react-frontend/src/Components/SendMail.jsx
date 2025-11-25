import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function SendMail() {
  const [reciverMail, setReciverMail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex justify-center items-center p-4">

      <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-5">

        <h2 className="text-white text-2xl font-semibold text-center">
          Send Mail
        </h2>

        <input
          type="text"
          placeholder="Enter Mail"
          className="w-full p-3 rounded-xl bg-[#262626] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <textarea 
          placeholder="Message..."
          className="w-full h-32 p-3 rounded-xl bg-[#262626] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        ></textarea>

        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-blue-500/30">
          Send Mail
        </button>

      </div>

    </div>
  )
}

export default SendMail
