import React from 'react';
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      
      <div className='absolute w-full 
      xs:h-[6.5%] xsm:h-[6.5%] xsl:h-[5.8%] sm:h-[12.5%] md:h-[12.5%] lg:h-[11%] xl:h-[9%]
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
            >Certificados</h1>
          </Fade>  
        </div>
      
      <div className="z-10 w-full md:w-[90%] lg:w-[90%] h-auto md:h-auto mb-6 pt-[12%] flex flex-wrap justify-center text-white ">
            
        {/* Tarjeta 1 */}
        <Fade cascade direction="top" duration={1500}>
          <div className="pt-12 px-4
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado Henry</h1>
              <img className="items-center rounded-lg
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[400px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[200px] lg:h-[250px] xl:h-[300px]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1716554778/Porfolio/Diploma_desarollador_fullStack_vc1bbn.jpg"
              alt="Imagen Certificado Henry" />
            </div>
          </div>
        </Fade>

        {/* Tarjeta 2 */}
        <Fade cascade direction="top" duration={1500} delay={200}>
          <div className="pt-12 px-4
          xs:w-[100%] xsm:w-[100%] xsl:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%]
          xs:h-[350px] xsm:h-[350px] xsl:h-[400px] sm:h-[450px] md:h-[350px] lg:h-[400px] xl:h-[450px]">
            <div className="h-full bg-gray-500 bg-opacity-30 rounded-lg p-6">
              <h1 className="text-lg text-center pb-4 font-kalam">Certificado No Country</h1>
              <img className="items-center rounded-lg
              xs:w-[300px] xsm:w-[300px] xsl:w-[300px] sm:w-[400px] md:w-[260px] lg:w-[350px] xl:w-[400px]
              xs:h-[200px] xsm:h-[200px] xsl:h-[250px] sm:h-[300px] md:h-[200px] lg:h-[250px] xl:h-[300px]"
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