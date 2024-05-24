import React from 'react';
import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <div id="project" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      
        <div className='absolute w-full h-[6%] mt-[8%] '
        style={   
          { 
            background:
            "linear-gradient(to right, transparent, transparent, black, transparent, transparent)",
            }
          }   >
          <Fade cascade direction="left">
            <h1 className='text-center text-white sky-text-shadow text-4xl font-sans font-bold italic mt-2 uppercase'>Proyectos</h1>
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
            <div className='items-center rounded-lg overflow-hidden
            xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
            xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>  
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799655/Porfolio/Captura_de_pantalla_512_bojnws.png"
              alt="Imagen Rick and Morty" />
            </div>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 2 */}
        <Fade cascade direction="top" duration={1500} delay={200}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.2s" }}>
            <div className="h-full bg-sky-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Dogs</h1>
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799655/Porfolio/Captura_de_pantalla_513_swyuix.png"
              alt="Imagen Dogs" />
            </div>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 3 */}
        <Fade cascade direction="top" duration={1500} delay={400}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
            <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">CodeCraft Templates</h1>
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715799654/Porfolio/Captura_de_pantalla_514_mrc6rd.png"
              alt="Imagen CodeCraft" />
            </div>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 4 */}
        <Fade cascade direction="top" duration={1500} delay={600}>
          <div className="pt-12 px-4 animate__animated animate__fadeInUp
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[400px] lg:h-[400px] xl:h-[400px]"
          style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.4s" }}>
          <div className="h-full bg-sky-500 bg-opacity-30 shadow-lg shadow-gray-800 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Health Style</h1>
              <div className='items-center rounded-lg overflow-hidden
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]'>
              <img className="items-center rounded-lg transition duration-700 hover:scale-110 cursor-pointer
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[320px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[220px] lg:h-[250px] xl:h-[250px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715807275/Porfolio/Captura_de_pantalla_515_qy7may.png"
              alt="Imagen Health Style" />
            </div>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 5 */}
        <Fade cascade direction="top" duration={1500} delay={800}>
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
