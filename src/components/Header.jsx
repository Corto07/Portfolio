import React from 'react';
import Image from "../assets/pngwing.com (26).png";
import hello from "../assets/waving-hand.png";
import { TypeAnimation } from 'react-type-animation';
import 'tailwindcss/tailwind.css';


const Header = () => {
  return (
    <div id="home" className="relative z-10 w-full flex justify-center bg-opacity-50 bg-black"> 
      
      <div className='relative w-[90%] h-[620px] '>
        <p className='absolute fuccia-text-shadow font-akaya text-white text-5xl top-[27%] left-[10%]'>Hola...!</p>
        
        <img className='absolute w-auto h-[10%] top-[24%] left-[23%]'
             src={hello}
             alt="Hola"/>
        
        <span className='absolute fuccia-text-shadow font-akaya text-white text-5xl top-[36%] left-[10%]'>Mi nombre es </span>
        <span className='absolute white-text-shadow font-akaya text-sky-700 text-6xl top-[34.5%] left-[33%] italic font-bold'>Claudio</span>

        <p className='absolute font-kalam black-text-shadow text-emerald-500 text-[26px] top-[51%] left-[10%]'>Soy Desarrollador Web Fullstack</p>

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
            className="absolute font-kalam text-[26px] text-white top-[57%] left-[10%]"
            repeat={Infinity}
        />

        <button className='absolute text-white border rounded-lg px-3 py-2 hover:bg-sky-700 top-[72%] left-[10%]'>Descargar CV</button>
      
            
        <img
          className="absolute bottom-10 right-20 w-auto h-[80%] object-cover animate-fade-left animate-duration-2000 animate-delay-[400ms] animate-ease-linear animate-normal"
          src={Image}
          alt="Imagen superpuesta"
        />
      </div>
    </div>
  );
};

export default Header;
