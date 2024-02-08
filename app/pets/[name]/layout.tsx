import React from 'react'

function PetPageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='h-screen flex flex-col items-center justify-center p-4 gap-8'>
      {children}
    </div>
  )
}

export default PetPageLayout