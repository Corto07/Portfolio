import React from 'react';

const NavBar = ({ activeLink }) => {
  return (
    <div className='z-50 fixed flex items-center justify-center w-full h-[12%] bg-black bg-opacity-50 shadow-lg shadow-gray-800'>
      
      <div className='w-[10%]'>
        <img className='w-14 ml-[85%] animate-spin slow' src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1715189551/Porfolio/pngwing.com_5_auxpxq.png'>
        </img>
      </div>
      <div className='w-[20%] text-center tracking-widest uppercase'>
        <p className='font-sans font-semibold text-[16px] text-gray-500 italic'>
          Claudio {""}
          <span className='font-sans text-[16px] text-gray-300 '>
          Carruz
          </span>
        </p>
        <p className='text-center font-kalam text-[14px] tracking-[5px] uppercase text-sky-400'>
          Developer
        </p>
      </div>
      
      <div className='w-[70%] font-sans font-semibold text-[16px] flex items-center justify-center tracking-wider uppercase'>
        
        <a
          className={`text-white m-6 ${activeLink === 'home' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500  transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'about' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500  transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#about"
        >
          Mi perfil
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'project' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500  transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#project"
        >
          Proyectos
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'tools' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500  transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#tools"
        >
          Herramientas
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'contact' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500  transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#contact"
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default NavBar;
