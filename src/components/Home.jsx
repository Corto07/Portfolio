import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Tools  from './Tools';

const Home = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Ajuste de compensación
      const home = document.getElementById('home').offsetTop;
      const about = document.getElementById('about').offsetTop;
      const project = document.getElementById('project').offsetTop;
      const tools = document.getElementById('tools').offsetTop;
      const contact = document.getElementById('contact').offsetTop;

      if (scrollPosition >= home && scrollPosition < about) {
        setActiveLink('home');
        window.history.replaceState(null, '', '#home');
      } else if (scrollPosition >= about && scrollPosition < project) {
        setActiveLink('about');
        window.history.replaceState(null, '', '#about');
      } else if (scrollPosition >= project && scrollPosition < tools) {
        setActiveLink('project');
        window.history.replaceState(null, '', '#project');
      } else if (scrollPosition >= tools && scrollPosition < contact) {
        setActiveLink('tools');
        window.history.replaceState(null, '', '#tools');
      } else if (scrollPosition >= contact) {
        setActiveLink('contact');
        window.history.replaceState(null, '', '#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <NavBar activeLink={activeLink} />
      <Header />
      <About />
      <Project />
      <Tools />
      <Contact />
      <Footer />
      
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <img
        className="w-full h-full object-cover"
        src='https://res.cloudinary.com/dhmkge0ia/image/upload/v1715171784/Porfolio/14540_nkv2sb.jpg'
        ></img>
        
      </div>
    </div>
  );
};

export default Home;
