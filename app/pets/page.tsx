import Link from 'next/link';
import React from 'react'
// import NewPet from './components/NewPet';
import NewPet from './components/NewPetControlled';
// import NewPet from './components/NewPetServerAction';
// import NewPet from './components/NewPetRouteHandler';

// import DeletePet from './components/DeletePet';
import DeletePet from './components/DeletePetRouteHandler';

export interface Pet {
  name: string;
  description: string;
}

async function PetsPage() {
  const fetchedPets = await fetch('http://localhost:5000/api/v1/pet').then(res => res.json()); 
  const pets: Pet[] = fetchedPets.data;

  return (
    <div className='h-screen flex flex-col gap-8 p-16'>
      <h1 className='text-2xl font-medium'>My Pets</h1>
      <div className='flex gap-8 '>
        <div className='flex-col gap-8 w-[400px]'>
          <ul className='flex flex-col gap-4'>
            {pets.map((pet) => (
              <li key={pet.name} className='flex gap-4 items-center'>
                <Link href={`/pets/${pet.name}`} className='grow flex flex-col gap-2 bg-white p-4 rounded-lg cursor-pointer'>
                  <h2>{pet.name}</h2>
                  <p>{pet.description}</p>
                </Link>
                <DeletePet name={pet.name}/>
              </li>
            ))}
          </ul>
        </div>
        <NewPet />
      </div>
    </div>
  )
}

export default PetsPage