import React from 'react'
import { Pet } from '../page';

interface PetPageProps {
  params: { name: string }
}

async function PetPage({params}: PetPageProps) {
  const fetchedPets = await fetch(`http://localhost:5000/api/v1/pet`).then(res => res.json());
  const pets = fetchedPets.data;
  const pet = pets.find((pet: Pet) => pet.name === params.name);

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