'use client'

import React from 'react'
import { BsTrash } from 'react-icons/bs'

function DeletePet({name}: {name: string}) {
  const handleDelete = async (name: string) => {
    const resp = await fetch(`http://localhost:5000/api/v1/pet/${name}`, {
      method: 'DELETE'
    });
  }
  return (
    <BsTrash className='text-2xl cursor-pointer' onClick={() => handleDelete(name)}/>
  )
}

export default DeletePet