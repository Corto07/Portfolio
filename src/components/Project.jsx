import React from 'react';
import { Fade } from "react-awesome-reveal";

const Project = () => {

  const ricky = "https://rick-and-morty-six-gilt.vercel.app/"

  return (
    <div id="project" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      
        <div className='absolute w-full 
        xs:h-[2.3%] xsm:h-[2.3%] xsl:h-[2.1%] sm:h-[4.5%] md:h-[4.5%] lg:h-[4.8%] xl:h-[6%]
        xs:mt-[8%] xsm:mt-[8%] xsl:mt-[8%] sm:mt-[8%] md:mt-[8%] lg:mt-[8%] xl:mt-[8%]'
        style={   
          {   
            background:
            "linear-gradient(to right, transparent, transparent, #3E9278, transparent, transparent)",
            }
          }   >
          <Fade cascade direction="left">
            <h1 className='text-center text-white sky-text-shadow font-sans font-bold italic mt-2 uppercase
            xs:text-2xl xsm:text-2xl xsl:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl'
            >Proyectos</h1>
          </Fade>  
        </div>

      <div className="z-10 w-full md:w-[90%] lg:w-[90%] h-auto md:h-auto mb-6 pt-[12%] flex flex-wrap justify-center text-white ">
        
        {/* Tarjeta 1 */}
        <Fade cascade direction="top" duration={1500}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]" 
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both" }}>
            <div className="h-full bg-sky-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Rick and Morty</h1>
              
            <a href="https://rick-and-morty-six-gilt.vercel.app" target="_blank" rel="noopener noreferrer">
            <div className='items-center rounded-lg overflow-hidden
            xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
            xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>  
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799655/Porfolio/Captura_de_pantalla_512_bojnws.png"
              alt="Imagen Rick and Morty" 
              />
            </div>
            </a>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 2 */}
        <Fade cascade direction="top" duration={1500} delay={400}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.2s" }}>
            <div className="h-full bg-sky-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Dogs</h1>
  
              <a href="https://pi-dogs-two-silk.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799655/Porfolio/Captura_de_pantalla_513_swyuix.png"
              alt="Imagen Dogs" />
            </div>
            </a>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 3 */}
        <Fade cascade direction="top" duration={1500} delay={700}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
            <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">CodeCraft Templates</h1>
              
              <a href="https://codecraftedtemplates.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799654/Porfolio/Captura_de_pantalla_514_mrc6rd.png"
              alt="Imagen CodeCraft" />
            </div>
            </a>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 4 */}
        <Fade cascade direction="top" duration={1500} delay={1000}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
          <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Health Style</h1>
              
              <a href="https://healthstyle.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715807275/Porfolio/Captura_de_pantalla_515_qy7may.png"
              alt="Imagen Health Style" />
            </div>
            </a>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 5 */}
        <Fade cascade direction="top" duration={1500} delay={1300}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
          <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">MotoRock</h1>
              
              <a href="https://motorockbahia.vercel.app" target="_blank" rel="noopener noreferrer">
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1724352368/Porfolio/Captura_de_pantalla_517_ium4a4.png"
              alt="Imagen Proyecto" />
            </div>
            </a>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 6 */}
        <Fade cascade direction="top" duration={1500} delay={1000}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
          <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Proyecto</h1>
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715807329/Porfolio/SitioEnConstruccion_tm8rtt.jpg"
              alt="Imagen Proyecto" />
            </div>
            </div>
          </div>
        </Fade>


      </div>
    </div>
  );
};

export default Project;
