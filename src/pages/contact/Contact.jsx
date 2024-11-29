import React from 'react'
import Navbar from '../../components/navbar/Navbar'

export default function Contact() {
  return (
    <main className='py-20 flex flex-col gap-28'>
      <header className="flex justify-center items-center">
        <Navbar />
      </header>
      <h1 className='text-7xl'>Me gustaria realizar un proyecto juntos, <span className='text-[#b75591]'>contactame</span></h1>
    </main>
  )
}

