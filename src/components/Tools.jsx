import React from 'react';
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      <div className="z-10 w-full md:w-[90%] lg:w-[90%] h-auto md:h-auto mb-6 pt-16 flex flex-wrap justify-center text-white ">
            
        {/* Tarjeta 1 */}
        <Fade cascade direction="top" duration={1500}>
          <div className="w-full md:w-[100%] lg:w-[100%] h-[400px] pt-12 px-4 animate__animated animate__fadeInUp" style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both" }}>
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado Henry</h1>
            <div className='items-center w-[300px] h-[250px] rounded-lg overflow-hidden'>  
              <img className="items-center w-[300px] h-[250px] rounded-lg transition duration-700 hover:scale-110 cursor-pointer"
              src=""
              alt="Imagen Certificado Henry" />
            </div>
            </div>
          </div>
        </Fade>

        {/* Tarjeta 2 */}
        <Fade cascade direction="top" duration={1500} delay={200}>
          <div className="w-full md:w-[100%] lg:w-[100%] h-[400px] pt-12 px-4 animate__animated animate__fadeInUp" style={{ animationName: "slideIn", animationDuration: "1.5s", animationFillMode: "both", animationDelay: "0.2s" }}>
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado No Country</h1>
              <div className='items-center w-[300px] h-[250px] rounded-lg overflow-hidden'>
              <img className="items-center w-[300px] h-[250px] rounded-lg transition duration-700 hover:scale-110 cursor-pointer"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715106097/Porfolio/Claudio_Carruz_dofxyi.jpg"
              alt="Certificado No Country" />
            </div>
            </div>
          </div>
      </Fade>
    </div>  
    </div>
  )
};

export default Tools;