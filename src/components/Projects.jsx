import React, { useEffect, useState } from "react";
import projectImage from "../assets/project.jpg";

const Projects = () => {
  const projects = [
    {
      description:
        "Aplicacion para detectar covid19 en personas, usando laravel 10 y flask con dataset ",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/jatemast/COVIDScan-AI",
      deployLink: "https://github.com/jatemast/apiflask",
    },
    {
      description:
        "Portafolio en React",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/jatemast/PortafolioMinimalistaRect",
      deployLink: "https://github.com/jatemast/PortafolioMinimalistaRect",
    },
    {
      description:
        "Backend demo api rest full, demostrativo",
      projectsImageSrc: projectImage,
      githubLink: "https://github.com/jatemast/SpraYL",
    },
  ];

  return (
    <div
      name="Projects"
      className="h-screen w-screen flex items-center flex-col" // Removed mb-10p class
    >
      <h2 className="font-semibold text-[40px]">Proyectos</h2>
      <div className="gap-4 mt-10 grid grid-cols-3 md:grid-cols-1">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500">
            <img className="object-cover" src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white">{p.description}</p>
              <div className="flex">
                <a href={p.githubLink}>Github</a>
                <a className="ml-4" href={p.deployLink}>
                  Deploy
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;