import Link from 'next/link';
import React from 'react'

export interface Pet {
  name: string;
  description: string;
}

async function PetsPage() {
  const fetchedPets = await fetch('http://localhost:5000/api/v1/pet').then(res => res.json()); 
  const pets: Pet[] = fetchedPets.data;

  return (
    <div className='h-screen flex flex-col gap-8 p-16'>
      <h1 className='text-2xl text-medium'>My Pets</h1>
      <ul className='flex flex-col gap-4'>
        {pets.map((pet) => (
          <li key={pet.name}>
            <Link href={`/pets/${pet.name}`} className='flex flex-col gap-2 bg-white p-4 rounded-lg cursor-pointer'>
              <h2>{pet.name}</h2>
              <p>{pet.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PetsPage