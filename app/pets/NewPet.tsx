'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

function NewPet() {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    const payload = {
      name: e.target.name.value,
      description: e.target.description.value
    };
    const resp = await fetch('http://localhost:5000/api/v1/pet', {
      method: 'POST', 
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    });
    console.log(resp);
    e.preventDefault();
  }

  return (
    <form className='h-[400px] w-[400px] flex flex-col gap-8 p-8 bg-white rounded-lg shadow-md'
      onSubmit={handleSubmit}
    >
      <h1 className='text-xl font-medium'>Add a new pet</h1>

      <input type='text' name='name' placeholder='Name' className='p-4 outline outline-gray-200 rounded-md bg-gray-50'/>
      <input type='text' name='description' placeholder='Description' className='p-4 outline outline-gray-200 rounded-md bg-gray-50'/>

      <button type='submit' className='mt-auto py-4 px-8 border-none rounded-md
          bg-[linear-gradient(30deg,_#d4c_0%,_#d4c_20%,_#a8f_80%,_#a8f_100%)]
          text-white text-lg font-bold cursor-pointer
          transition-all duration-150
          hover:brightness-[0.9]
          focus:outline-none
          active:scale-[0.95]'
        >
          ADD
        </button>  
    </form>
  )
}

export default NewPet