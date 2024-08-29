import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="flex flex-col items-center h-screen w-screen"
    >
      <h2 className="font-semibold text-[40px]">Acerca de</h2>

      <div className="flex flex-col items-center justify-center w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white text-center text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl">
          ¡Hola! Mi nombre es Javier Teherán Magallanes. Soy tecnólogo en desarrollo de software y estudiante de ingeniería en sistemas en décimo semestre.
          
          Cuento con casi 2 años de experiencia en el área de desarrollo de software, en los cuales he trabajado en proyectos de desarrollo web tanto en el front-end como en el back-end, utilizando tecnologías como React, Laravel, Flask, Tailwind CSS, entre otras.
          Soy desarrollador backend es mi fuerte y estoy en constante aprendizaje para mejorar mis habilidades en el desarrollo de software.
        
          
         
        </p>
       
      </div>
    </div>
  );
};

export default About;
