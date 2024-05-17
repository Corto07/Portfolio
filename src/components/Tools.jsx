import React from 'react';
import { Fade } from "react-awesome-reveal";

const Tools = () => {
  return (
    <div id="tools" className="relative z-10 w-[100%] h-[620px] flex justify-center bg-opacity-70 bg-black">
    
    <div className='z-10 w-[100%] text-white'>
      <Fade cascade direction="left">
        <h1 className='ml-[30%] mt-[10%]'>Herramientas</h1>
        <img className="ml-[13%] items-center w-[72%]"
              src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715946273/Porfolio/imgUnder_d6b9vg.png"
              alt="Imagen Proyecto" />
      </Fade>
    </div>  
    </div>
  )
};

export default Tools;