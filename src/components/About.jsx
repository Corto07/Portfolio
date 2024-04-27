import React from 'react';
import Image from "../assets/imagen.png";

const About = () => {
  return (
    <div id="about" className="relative z-10 w-full h-[640px] flex justify-center bg-opacity-10 bg-blue-900"> 
    
      <div className='relative z-10 w-[90%] text-white '>
        
        <h1 className='absolute text-white top-24 left-0'>About Me</h1>
        
        <img
          className="absolute bottom-0 right-0 w-auto h-[85%] object-cover"
          src={Image}
          alt="Imagen About Me"
        />
      
      </div>
    
    </div>
  )
};

export default About;
