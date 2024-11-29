import React from 'react'
import { Link } from 'react-router-dom'
import SummaryProjects from './components/SummaryProjects'

export default function Home() {
  return (
    <main>
      <section className="h-screen lg:w-1/2 lg:px-10 lg:fixed left-0 top-0 flex justify-center items-center  text-white">
        <article className="flex flex-col justify-center items-center p-20 rounded-2xl shadow-2xl shadow-[#524e4e]  gap-10 h-full w-full lg:h-[50rem] lg:w-11/12 xl:w-3/4 text-[#FFFFFF]  bg-[#131414eb]">
          <div className="flex flex-col gap-2 justify-center items-center text-wrap text-center">
            <img src='/assets/imgAvatar.jpg' className="rounded-full" />
            <h2 className="font-bold text-7xl">Hola! Soy</h2>
            <h2 className="font-bold text-7xl">Agustin Sanchez</h2>
            <p className="text-xl">Frontend Developer -  <a className="text-[#b75591]" href={'https://www.linkedin.com/in/agussanchz/'} target="blank">@agussanchz</a></p>
          </div>
        </article>
      </section>

      <section className=" lg:w-1/2 lg:py-24 lg:px-5 lg:absolute right-0 top-0 flex flex-col items-center gap-20">
        <div className="bg-[#292727ca] w-11/12 lg:w-3/4 flex flex-col p-10 gap-2 ">
          <h2 className="text-xl text-[#fffefe] font-medium">Sobre mi</h2>
          <p className='flex justify-center text-[#727070]'>
            Apasionado del diseño y desarrollo web, me especializo en crear interfaces funcionales y estéticamente atractivas que mejoran la experiencia del usuario.
          </p>
          <Link to={'/experience'} className="text-md font-bold ">Ver mas sobre mi experiencia</Link>
        </div>
        <SummaryProjects />
        <div className="bg-[#292727ca] w-11/12 lg:w-3/4   flex flex-col p-10 gap-2">
          <p className='text-5xl'>Me gustaria realizar un proyecto juntos, <span className='text-[#b75591]'>contactame.</span></p>
          <Link to={'/contact'} className="text-xl font-bold ">Ir a contacto</Link>
        </div>
      </section>
    </main>
  )
}
