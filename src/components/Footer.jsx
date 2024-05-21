import React from 'react';

const Footer = () => {
  return (
    <div className="relative z-10 w-full h-auto bg-opacity-70 bg-black"> 
      
      <div className="w-full">

      <div className='flex justify-center'>
        <img className='w-32 pb-4 pt-4' src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964906/Porfolio/pngwing.com_27_je78sc.png'>
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
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#project">Proyectos</a>
        <span className="ml-3 text-gray-500">|</span>
          <a className="ml-3 text-[#3E9278] hover:text-white" href="#tools">Certificados</a>
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