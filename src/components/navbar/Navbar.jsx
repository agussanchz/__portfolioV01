import React from 'react'

export default function Navbar() {
  return (
    <nav className='shadow-2xl fixed shadow-[#524e4e] text-gray-400 bg-[#131414eb]  w-[20rem] p-3 rounded-full top-3'>
        <ul className='flex justify-center gap-3 text-lg font-medium'>
            <a href={'/'} className='hover:text-[#FFFFFF]'>Volver</a>
        </ul>
    </nav>
  )
}

