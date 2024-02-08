import Link from 'next/link';
import React from 'react'

export interface Pet {
  name: string;
  description: string;
}

export const pets: Pet[] = [
  { name: 'Fluffy', description: 'Fluffy is a very good cat.' },
  { name: 'Fido', description: 'Fido is a very good dog.' },
  { name: 'Goldie', description: 'Goldie is a very good fish.' },
]

function PetsPage() {
  return (
    <div className='h-screen flex flex-col gap-8 p-16'>
      <h1>My Pets</h1>
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