import React from 'react';
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      <div className="z-10 w-full md:w-[90%] lg:w-[90%] h-auto md:h-auto mb-6 pt-16 flex flex-wrap justify-center text-white ">
            
        {/* Tarjeta 1 */}
        <Fade cascade direction="top" duration={1500}>
          <div className="w-full md:w-[100%] lg:w-[100%] h-[450px] pt-12 px-4">
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado Henry</h1>
              <img className="items-center w-[400px] h-[300px] rounded-lg"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1716554778/Porfolio/Diploma_desarollador_fullStack_vc1bbn.jpg"
              alt="Imagen Certificado Henry" />
            </div>
          </div>
        </Fade>

        {/* Tarjeta 2 */}
        <Fade cascade direction="top" duration={1500} delay={200}>
          <div className="w-full md:w-[100%] lg:w-[100%] h-[450px] pt-12 px-4">
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado No Country</h1>
              <img className="items-center w-[400px] h-[300px] rounded-lg"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715106097/Porfolio/Claudio_Carruz_dofxyi.jpg"
              alt="Certificado No Country" />
            </div>
          </div>
        </Fade>
      </div>  
    </div>
  )
};

export default Tools;