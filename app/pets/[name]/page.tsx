import React from 'react'

interface PetPageProps {
  params: { name: string }
}

async function PetPage({params}: PetPageProps) {
  const fetchedPet = await fetch(`http://localhost:5000/api/v1/pet/${params.name}`, {cache: 'no-store'}).then(res => res.json());
  const pet = fetchedPet.data;

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