import React from 'react'
import { Link } from 'react-router-dom'

export default function SummaryProjects() {

    const projects = [
        {
            "name": 'Centro Privado Salud',
            "description": "Pagina web para una clinica privada.",
            "url": '#'
        },
        {
            "name": 'Barberia Edgar',
            "description": "Turnero online para barberia.",
            "url": '#'
        },
        {
            "name": 'Ecommerce',
            "description": "Proyecto ecommerce para practicar CRUD con next.js.",
            "url": '#'
        }
    ]

    return (
        <>
            <div className="bg-[#292727ca] w-11/12 lg:w-3/4  flex flex-col p-10 gap-4">
                <h2 className="text-xl text-[#fffefe] font-medium">Proyectos</h2>
                {projects.map((project) => (
                    <article className="bg-[#423f3fca]  flex flex-col p-4 hover:border hover:border-gray-400">
                        <h3 className="font-bold text-[#b75591]">{project.name}</h3>
                        <p className="text-[#727070]">{project.description}</p>
                        <Link to={project.url} className="text-md font-bold ">Ver mas</Link>
                    </article>
                ))}
                <Link to={'/projects'} className="text-xl font-bold ">Ver todos los proyectos</Link>
            </div>
        </>
    )
}
