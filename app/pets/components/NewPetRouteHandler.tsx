'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

function NewPet() {
  const router = useRouter();

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = async () => {;
    const payload = {
      name, 
      description, 
    };
    const res = await fetch('http://localhost:3000/api/pet', {
      method: 'POST', 
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    }); 
    router.refresh();
  }

  return (
    <form className='h-[400px] w-[400px] flex flex-col gap-8 p-8 bg-white rounded-lg shadow-md'>
      <h1 className='text-xl font-medium'>Add a new pet</h1>

      <input type='text' name='name' 
        onChange={e => setName(e.target.value)}
        value={name}
        placeholder='Name' className='p-4 outline outline-gray-200 rounded-md bg-gray-50'
      />
      <input type='text' name='description' 
        onChange={e => setDescription(e.target.value)}
        value={description}
        placeholder='Description' className='p-4 outline outline-gray-200 rounded-md bg-gray-50'
      />

      <button onClick={handleSubmit} className='mt-auto py-4 px-8 border-none rounded-md
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