import React from 'react';


const NavBar = () => {
  return (
  <div className='z-50 fixed flex items-center justify-center w-full h-20 bg-black bg-opacity-50'>
    
    <div className='w-[30%] font-satisfy text-[32px] text-white'>
      <a className='ml-28 text-white hover:text-emerald-500' href="/about" rel="noreferrer">Claudio Carruz</a>
    </div>

    <div className='w-[70%] font-akaya text-[28px] text-white flex items-center justify-end'>
      <a className='text-white m-3 hover:text-sky-700 ' href="/" rel="noreferrer">Home</a>
      <a className='text-white m-3 hover:text-sky-700' href="#about" rel="noreferrer">Mi perfil</a>
      <a className='text-white m-3 hover:text-sky-700' href="/" rel="noreferrer">Proyectos</a>
      <a className='text-white m-3 hover:text-sky-700' href="/" rel="noreferrer">Herramientas</a>
      <a className='text-white m-3 hover:text-sky-700 mr-28' href="/" rel="noreferrer">Contacto</a>
    </div>
    
  </div>
)
};

export default NavBar;
