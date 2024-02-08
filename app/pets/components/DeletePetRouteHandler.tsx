'use client'

import React from 'react'
import { BsTrash } from 'react-icons/bs'

function DeletePet({name}: {name: string}) {
  const handleDelete = async (name: string) => {
    const resp = await fetch(`http://localhost:3000/api/pet/${name}`, {
      method: 'DELETE'
    });
    console.log(resp);
  }
  return (
    <BsTrash className='text-2xl cursor-pointer' onClick={() => handleDelete(name)}/>
  )
}

export default DeletePet