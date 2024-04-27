import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Fondo from "../assets/1118545_4k_Form_Graphic_1280x720.mp4";

const Home = () => {
  return (
    <div className="relative">
      {/* Contenido de la página */}
      <div className='z-10'>
        <NavBar />
        <Header />
        <About />
        <Footer />
      </div>

      {/* Video de fondo */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={Fondo}
        />
      </div>
    </div>
  );
};

export default Home;

