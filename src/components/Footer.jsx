import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative z-10 w-full h-auto bg-opacity-70 bg-black"> 
      
          
      <div className="w-full p-3 mb-2 flex justify-center text-gray-400">
        
        <a href="https://wa.me/+5492915032061" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964884/Porfolio/transparent-whatsapp-logo-green-circular-whatsapp-icon-with-white-outline65c199e79811c9.6493427317071866636229_t97qpw.png"
          alt="Whatsapp"
          />
        </a>
       
        <a href="https://mailto:claudiocarruz@gmail.com" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964865/Porfolio/kisspng-gmail-computer-icons-logo-email-gmail-5abe0b09a7c104.1578517615224041056871_okdeni.png"
          alt="Mail"
          />
        </a>
        
        <a href="https://www.linkedin.com/in/claudio-carruz-24961256" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964872/Porfolio/kisspng-linkedin-logo-computer-icons-business-symbol-linkedin-icon-5ab1765660baa8.1191823015215796063962_u6d9yq.png"
          alt="LinkedIn"
          />
        </a>

        <a href="https://www.github.com/corto07" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964850/Porfolio/kisspng-github-computer-icons-repository-source-code-github-5ac8260690a5e3.4618135015230663745925_s4epog.png"
          alt="Github"
          />
        </a>

        <a href="https://www.instagram.com/claudiocarruz" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964892/Porfolio/pngwing.com_19_isd3am.png"
          alt="Instagram"
          />
        </a>

      
      </div>
   
      <div className="w-full">

      <div className='flex justify-center'>
        <img className='w-32 pb-4' src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964906/Porfolio/pngwing.com_27_je78sc.png'>
        </img>
      </div>
      <div className='w-[100%] text-center tracking-widest uppercase'>
        <p className='font-sans font-semibold text-[30px] text-gray-500 italic'>
          Claudio {""}
          <span className='font-sans font-semibold text-[30px] text-gray-300'>
          Carruz
          </span>
        </p>
        <p className='text-center font-kalam text-[28px] tracking-[8px] uppercase text-sky-500  pb-4'>
          Developer
        </p>
      </div>
     
      <div className="p-3 w-full lg:text-xl xs:text-md flex flex-wrap font-semibold justify-center">
        <span className="text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#">Home</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#about">Mi perfil</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#projectk">Proyectos</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#tools">Herramientas</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#contact">Contacto</a>
        <span className="ml-3 text-gray-500 pb-2">|</span>
      </div>
        
        <p className="items-center text-center text-white pb-8">&copy; 2024 Portfolio | Todos los derechos reservados</p>
      
      </div>
    
    </div>
)
};

export default Footer;
