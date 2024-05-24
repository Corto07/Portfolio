import React from 'react';
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className="relative z-10 w-full md:w-[100%] h-auto md:h-auto flex justify-center bg-opacity-70 bg-black">
      <div className="z-10 w-full md:w-[90%] lg:w-[90%] h-auto md:h-auto mb-6 pt-16 flex flex-wrap justify-center text-white ">
            
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