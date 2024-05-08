import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import 'tailwindcss/tailwind.css';
import {Ripple, initTWE,} from "tw-elements";
import { Fade } from "react-awesome-reveal";
import CV from '../assets/CV.pdf';

const Header = () => {

  initTWE({ Ripple });

  const handleDownload = () => {
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = CV;
    link.target = '_blank'; // Abrir en una nueva pestaña para la descarga
    link.download = 'CV.pdf'; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Limpiar el enlace temporal después de la descarga
  };

  return (
    <div id="home" className="relative z-10 w-[100%] overflow-hidden flex justify-center bg-opacity-70 bg-black"> 
      
      <div className='relative w-[90%] h-[620px] '>
        <p className='absolute sky-text-shadow font-sans font-semibold text-white text-[250%] top-[27%] left-[8%]'>Hola...!</p>
        
        <img className='absolute w-auto h-[10%] top-[24%] left-[20%]'
             src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715105672/Porfolio/waving-hand_nbdiao.png"
             alt="Hola"/>
        
        <span className='absolute sky-text-shadow font-sans font-semibold text-white text-[250%] top-[36%] left-[8%]'>Mi nombre es </span>
        <span className='absolute white-text-shadow font-sans text-sky-700 text-5xl top-[36.5%] left-[29.6%] italic font-bold'>Claudio</span>

        <p className='absolute font-kalam black-text-shadow text-sky-600 text-[26px] top-[51%] left-[8%]'>Soy Desarrollador Web Fullstack</p>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'de Bahía Blanca,',
            1000,
            'de Bahía Blanca, Buenos Aires,',
            1000,
            'de Bahía Blanca, Buenos Aires, Argentina.',
            1000, 
            'de Bahía Blanca, Buenos Aires,',
            1000,
            'de Bahía Blanca,',
            1000,
          ]}
            speed={50}
            className="absolute font-kalam text-[26px] text-white top-[57%] left-[8%]"
            repeat={Infinity}
        />

        <button 
          className='z-10 absolute font-sans font-medium text-[18px] text-white border rounded-lg px-4 py-2 hover:bg-sky-700 top-[72%] left-[8%]'
          onClick={handleDownload}
          >
          Descargar CV
        </button>
          
        <Fade cascade direction="right">
          <img
            className="ml-[56%] mt-[10%] w-[35%] h-auto object-cover"
            src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715173636/Porfolio/pngwing.com_25_dyynxx.png"
            alt="Imagen superpuesta"
          />
        </Fade>

      </div>
    
    </div>
  );
};

export default Header;
