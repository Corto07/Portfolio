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
      
      <div className='relative w-[90%] h-auto mb-5'>
        <p className='absolute sky-text-shadow font-sans font-semibold text-white 
        xs:text-[250%] xsm:text-[250%] xsl:text-[250%] sm:text-[250%] md:text-[250%] lg:text-[250%]
        xs:top-[22%] xsm:top-[22%] xsl:top-[22%] sm:top-[25%] md:top-[25%] lg:top-[27%]
        xs:left-[8%] xsm:left-[8%] xsl:left-[8%] sm:left-[8%] md:left-[8%] lg:left-[8%]'
        >Hola...!</p>
        
        <img className='absolute 
        xs:w-auto xsm:w-auto xsl:w-auto sm:w-auto md:w-auto lg:w-auto
        xs:h-[10%] xsm:h-[10%] xsl:h-[10%] sm:h-[10%] md:h-[10%] lg:h-[10%]
        xs:top-[20%] xsm:top-[20%] xsl:top-[20%] sm:top-[22%] md:top-[22%] lg:top-[24%]
        xs:left-[60%] xsm:left-[50%] xsl:left-[45%] sm:left-[30%] md:left-[30%] lg:left-[23%] xl:left-[20%]'
             src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715105672/Porfolio/waving-hand_nbdiao.png"
             alt="Hola"/>
        
        <span className='absolute sky-text-shadow font-sans font-semibold text-white 
        xs:text-[250%] xsm:text-[250%] xsl:text-[250%] sm:text-[250%] md:text-[250%] lg:text-[250%]
        xs:top-[30%] xsm:top-[30%] xsl:top-[30%] sm:top-[34%] md:top-[34%] lg:top-[36%]
        xs:left-[8%] xsm:left-[8%] xsl:left-[8%] sm:left-[8%] md:left-[8%] lg:left-[8%]'
        >Mi nombre es </span>
        
        <span className='absolute white-text-shadow font-sans text-sky-700 italic font-bold
        xs:text-5xl xsm:text-5xl xsl:text-5xl sm:text-5xl md:text-5xl lg:text-5xl
        xs:top-[39%] xsm:top-[39%] xsl:top-[39%] sm:top-[34.5%] md:top-[34.5%] lg:top-[36.5%]
        xs:left-[8%] xsm:left-[8%] xsl:left-[8%] sm:left-[29.6%] md:left-[46%] lg:left-[36.5%] xl:left-[29.6%]'
        >Claudio</span>

        <p className='absolute font-kalam black-text-shadow text-sky-600 
        xs:text-[18px] xsm:text-[20.5px] xsl:text-[22px] sm:text-[26px] md:text-[26px] lg:text-[26px]
        xs:top-[51%] xsm:top-[51%] xsl:top-[51%] sm:top-[49%] md:top-[49%] lg:top-[51%]   
        xs:left-[8%] xsm:left-[8%] xsl:left-[8%] sm:left-[8%] md:left-[8%] lg:left-[8%]'
        >Soy Desarrollador Web Fullstack</p>

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
          className='z-10 absolute font-sans font-medium text-[18px] text-white border rounded-lg px-4 py-2 hover:bg-sky-700 
          xs:top-[80%] xsm:top-[75%] xsl:top-[75%] sm:top-[78%] md:top-[78%] lg:top-[72%]
          xs:left-[8%] xsm:left-[8%] xsl:left-[8%] sm:left-[8%] md:left-[8%] lg:left-[8%]'
          onClick={handleDownload}
          >
          Descargar CV
        </button>
          
        <Fade cascade direction="right">
          <img
            className="lg:ml-[62%] xl:ml-[54%] lg:mt-[17.5%] xl:mt-[10%] w-[35%] h-auto object-cover hidden lg:block "
            src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715173636/Porfolio/pngwing.com_25_dyynxx.png"
            alt="Imagen superpuesta"
          />
        </Fade>

      </div>
    
    </div>
  );
};

export default Header;
