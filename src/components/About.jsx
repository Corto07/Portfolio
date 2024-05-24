import React from 'react';
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    
    <div id="about" className="relative z-10 flex justify-center bg-opacity-70 bg-black 
         xs:w-full xsm:w-full xsl:w-full sm:w-full md:w-full lg:w-full xl:w-full 
         h-auto"> 
    
      <div className='z-10 md:w-[90%] lg:w-[80%] xl:w-[60%]'>
        <Fade cascade direction="left">
          <div className='z-10 text-white rounded-3xl bg-opacity-40 bg-black shadow-lg shadow-gray-800
          xs:w-[90%] xsm:w-[90%] xsl:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%] 
          h-[90%] 
          xs:ml-[5%] xsm:ml-[5%] xsl:ml-[5%] sm:ml-[5%] md:ml-[5%] lg:ml-[15%] xl:ml-[15%]
          mt-[14%]
          mb-[5%]'>
            <h1 className='pt-[4%] ml-[4%] text-3xl font-kalam font-semibold'>Algo sobre mi...</h1>
              <p className='mt-8 ml-[4%] mr-[4%] text-md font-normal leading-relaxed text-justify'>Me llamo Claudio Carruz soy un desarrollador web Fullstack de Argentina, con gran afición al mundo tecnológico, orientado al diseño frontend y al material visual.</p>
              <p className='mt-8 ml-[4%] mr-[4%] text-md font-normal leading-relaxed text-justify'>A lo largo de mi capacitación teórico-práctica en el mundo del desarrollo web, me involucre en el desarrollo de varios proyectos, tanto individuales como grupales. Sumando resolución de problemas a cada proyecto, adaptabilidad y proactividad a los mismos.</p>
              <p className='mt-8 ml-[4%] mr-[4%] pb-8 text-md font-normal leading-relaxed text-justify'>Hoy como desarrollador cuento con experiencia en direccion de pequeños equipos de trabajo y en la participación de todo proceso de una aplicación. Pretendo incorporarme al mundo IT y poder afianzarme en un equipo de desarrollo donde pueda seguir aprendiendo, y creciendo como desarrollador</p>
          </div>
        </Fade>  
      </div>
        
      <div className='z-10 overflow-hidden hidden lg:block
      xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[40%] xl:w-[40%]'>
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