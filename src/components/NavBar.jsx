import React, { useState, useEffect } from 'react';

const NavBar = ({ activeLink }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById('sidebar');
      const openSidebarButton = document.getElementById('open-sidebar');
      if (sidebar && openSidebarButton && !sidebar.contains(e.target) && !openSidebarButton.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='z-50 fixed flex items-center justify-center bg-black bg-opacity-50 shadow-lg shadow-gray-800
    xs:w-full xsm:w-full xsl:w-full sm:w-full md:w-full lg:w-full xl:w-full 
    xs:h-[12%] xsm:h-[12%] xsl:h-[12%] sm:h-[14%] md:h-[14%] lg:h-[12%] xl:h-[12%] '>
      
      {/* Logo Portfolio */}
      <div className='xs:[20%] xsm:w-[20%] xsl:w-[20%] sm:w-[20%] md:w-[20%] lg:w-[10%] xl:w-[10%]'>
        <img className='animate-spin slow
        xs:w-12 xsm:w-12 xsl:w-12 sm:w-12 md:w-12 lg:w-14 xl:w-14
        xs:ml-[20%] xsm:ml-[40%] xsl:ml-[40%] sm:ml-[20%] md:ml-[30%] lg:ml-[55%] xl:ml-[85%]' 
        src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964906/Porfolio/pngwing.com_27_je78sc.png'
        alt='Logo'>
        </img>
      </div>
      
      {/* Datos Portfolio */}
      <div className='xs:w-[60%] xsm:w-[60%] xsl:w-[60%] sm:w-[60%] md:w-[60%] lg:w-[20%] xl:w-[20%] text-center tracking-widest uppercase'>
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
      
      {/* Menu */}
      <div className='hidden lg:block lg:w-[70%] font-sans font-semibold text-[16px] lg:flex lg:items-center lg:justify-center tracking-wider uppercase'>
        <a
          className={`text-white m-6 ${activeLink === 'home' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-700 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-700 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#home"
        >
          Home
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'about' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#about"
        >
          Mi perfil
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'project' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#project"
        >
          Proyectos
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'tools' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#tools"
        >
          Certificados
        </a>
        <a
          className={`text-white m-6 ${activeLink === 'contact' ? 'border-b border-sky-500 pointer-events-none' : 'relative hover:text-sky-500 transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'}`}
          href="#contact"
        >
          Contacto
        </a>
      </div>
    
      {/* Burguer Menu */}
      <div className='xs:w-[20%] xsm:w-[20%] xsl:w-[20%] sm:w-[20%] md:w-[20%] lg:hidden '>
        <button className="text-gray-500 hover:text-gray-600 xs:ml-4 xsm:ml-6 xsl:ml-8 sm:ml-24" id="open-sidebar" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

        {/* Sidebar */}
        <div className={`fixed top-0 left-0 text-white w-96 h-full transition-transform transform ${sidebarOpen ? 'translate-x-0 ' : '-translate-x-full'} ease-in-out duration-300`}
            style={   
              { 
                background:
                "linear-gradient(to right, black, black, transparent)",
                }
              }   
            id="sidebar">
            {/* Sidebar Content */}
            <div className="mt-6">
                <h1 className="text-2xl text-sky-600 ml-5 font-semibold">Menú</h1>
                <ul className="mt-6">
                    <li className="mb-3 ml-5"><a href="#home" className="block hover:text-sky-600">Home</a></li>
                    <li className="mb-3 ml-5"><a href="#about" className="block hover:text-sky-600">Mi perfil</a></li>
                    <li className="mb-3 ml-5"><a href="#project" className="block hover:text-sky-600">Proyectos</a></li>
                    <li className="mb-3 ml-5"><a href="#tools" className="block hover:text-sky-600">Certificados</a></li>
                    <li className="mb-3 ml-5"><a href="#contact" className="block hover:text-sky-600">Contacto</a></li>
                    <li className="mb-3 ml-5"><a href="#close" onClick={() => setSidebarOpen(false)} className="block hover:text-sky-600">Cerrar Menú</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default NavBar;
