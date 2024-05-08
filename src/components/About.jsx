import React from 'react';
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    
    <div id="about" className="relative z-10 w-300 h-[640px] flex justify-center bg-opacity-70 bg-black"> 
    
      <div className='z-10 w-[60%]'>
        <Fade cascade direction="left">
          <div className='z-10 w-[80%] h-[90%] ml-[15%] mt-[14%] text-white rounded-3xl bg-opacity-40 bg-black shadow-lg shadow-gray-800'>
            <h1 className='pt-[4%] ml-[4%] text-3xl font-kalam font-semibold'>Algo sobre mi...</h1>
              <p className='mt-8 ml-[4%] mr-[4%] text-md font-normal leading-relaxed text-justify'>Me llamo Claudio Carruz soy un desarrollador web Fullstack de Argentina, con gran afición al mundo tecnológico, orientado al diseño frontend y al material visual.</p>
              <p className='mt-8 ml-[4%] mr-[4%] text-md font-normal leading-relaxed text-justify'>A lo largo de mi capacitación teórico-práctica en el mundo del desarrollo web, me involucre en el desarrollo de varios proyectos, tanto individuales como grupales. Sumando resolución de problemas a cada proyecto, adaptabilidad y proactividad a los mismos.</p>
              <p className='mt-8 ml-[4%] mr-[4%] pb-8 text-md font-normal leading-relaxed text-justify'>Hoy como desarrollador cuento con experiencia en direccion de pequeños equipos de trabajo y en la participación de todo proceso de una aplicación. Pretendo incorporarme al mundo IT y poder afianzarme en un equipo de desarrollo donde pueda seguir aprendiendo, y creciendo como desarrollador</p>
          </div>
        </Fade>  
      </div>
        
      <div className='z-10 w-[40%] overflow-hidden'>
        <Fade cascade direction="right">
          <img
            className="mt-[16%] w-[78%] h-auto "
            src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715105952/Porfolio/Imagen2_famcbd.png"
            alt="Imagen About Me"
          />
        </Fade>
      </div>

    
    </div>
  )
};

export default About;
