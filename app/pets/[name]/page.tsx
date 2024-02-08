import React from 'react'
import { pets } from '../page'

interface PetPageProps {
  params: { name: string }
}

async function PetPage({params}: PetPageProps) {

  const pet = pets.find(pet => pet.name === params.name);
  
  // in a real app, fetch pet data from DB - smth like this:
  // const pet = await db.getPet({name: params.name});

  if (!pet) {
    return <div className='text-2xl'>
      <span className='text-4xl'>🤷 </span>
      No such pet as 
      <span className='text-bold text-red-600'> {params.name}</span>
    </div>;
  }

  return (
      <>
        <h1 className='text-2xl font-medium'>{pet.name}</h1>
        <p>{pet.description}</p>
      </>
    )
}

export default PetPage