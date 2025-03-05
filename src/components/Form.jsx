import axios from 'axios';
import React, { useState } from 'react'
import UserData from './UserData';

function Form() {
const [formData,setFormData]=useState({ name: "", email: "", message: "" });
const [data,setData]=useState({ name: "", email: "", message: "" });
const onSubmit=async (e)=>{
    e.preventDefault();

    try {
        const result=await axios.post(`https://task30-backend.vercel.app/api/store_data`,formData);

        // console.log(result.data);
        
        setData(result.data);
        
    } catch (error) {
        console.error("Erroe Occurred:", error);
        alert(error);  
    }
}

const handleOnChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">User Detail</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
       
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          ></textarea>
         
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <UserData data={data} />
    </div>
  )
}

export default Form
