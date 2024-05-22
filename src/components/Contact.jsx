import React, {useState} from "react";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import { validation } from "./validation";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  
  const [errors, setErrors] = useState({ })
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email:  "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
        [e.target.name]: e.target.value
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm("service_36tn2lg", "template_egfgh04", e.target, "xfebKPwtN_1UuH0yO")
        .then((result) => {
          console.log(result.text);
          showSuccessAlert("Mensaje enviado correctamente...!");
        // Limpiar el formulario después del envío
        setInput({
          name: "",
          lastname: "",
          email:  "",
          phone: "",
          subject: "",
          message: "",
        });
        }, (error) => {
          console.log(error.text);
          showErrorAlert("Hubo un error al enviar el mensaje");
      });
  };
   
  //------Mensajes de Alerta-------------------------------------
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Enviado",
      confirmButtonColor: "rgb(33 102 81)",
      text: `${message}`,
    });
  };
    
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${message}`,
    });
  };
  //---------------------------------------------------------------
  
  //-----------Campos llenos--------------------------------------------------------------------------------------------------------------------------------
  const inputLleno = input.name !== '' && input.lastname !== '' && input.email !== '' && input.phone !== '' && input.subject !== '' && input.message !== '';
  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  
  return (

    <div id="contact" className="relative overflow-hidden z-10 text-white md:flex md:justify-center bg-opacity-70 bg-black
    xs:w-full xsm:w-full xsl:w-full sm:w-full md:w-full lg:w-full xl:w-full 
    h-auto pt-1 pb-1"> 
    
    <div className='z-10 md:w-[90%] lg:w-[80%] xl:w-[50%]'>
      <Fade cascade direction="left">
        <div className='z-10 text-white rounded-3xl bg-opacity-40 bg-black shadow-lg shadow-gray-800
          xs:w-[90%] xsm:w-[90%] xsl:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[100%] 
          h-[90%] 
          xs:ml-[5%] xsm:ml-[5%] xsl:ml-[5%] sm:ml-[5%] md:ml-[5%] lg:ml-[10%] xl:ml-[12%]
          mt-[22%]
          mb-[5%] '>
            <h1 className='pt-[4%] ml-[8%] text-3xl font-kalam font-semibold'>Ponete en Contacto...</h1>
              <img className="ml-[25%] mt-[-2%] w-[60%] h-auto "
            src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715105007/Porfolio/pngwing.com_26_rt0ouc.png"
            alt="Imagen About Me"
              />
              <p className='ml-[4%] mr-[4%] text-md font-normal leading-relaxed text-justify'>Estoy disponible en casi todas las redes sociales. Puede enviarme un mensaje, le responderé dentro de las 24 horas. Siempre puedes contactarme por los siguientes medios.</p>
              <p className='mt-8 ml-[4%] mr-[4%] font-kalam pb-3 text-md font-normal leading-relaxed text-center'>CONTÁCTAME AQUÍ {""} 👇</p>
          
              <div className="w-full p-3 mb-2 flex justify-center text-gray-400">
        
        <a href="https://wa.me/+5492915032061" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964884/Porfolio/transparent-whatsapp-logo-green-circular-whatsapp-icon-with-white-outline65c199e79811c9.6493427317071866636229_t97qpw.png"
          alt="Whatsapp"
          />
        </a>
       
        <a href="https://mailto:claudiocarruz@gmail.com" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964865/Porfolio/kisspng-gmail-computer-icons-logo-email-gmail-5abe0b09a7c104.1578517615224041056871_okdeni.png"
          alt="Mail"
          />
        </a>
        
        <a href="https://www.linkedin.com/in/claudio-carruz-24961256" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964872/Porfolio/kisspng-linkedin-logo-computer-icons-business-symbol-linkedin-icon-5ab1765660baa8.1191823015215796063962_u6d9yq.png"
          alt="LinkedIn"
          />
        </a>

        <a href="https://www.github.com/corto07" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964850/Porfolio/kisspng-github-computer-icons-repository-source-code-github-5ac8260690a5e3.4618135015230663745925_s4epog.png"
          alt="Github"
          />
        </a>

        <a href="https://www.instagram.com/claudiocarruz" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-2 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715964892/Porfolio/pngwing.com_19_isd3am.png"
          alt="Instagram"
          />
        </a>

        <a href="https://www.facebook.com/claudiocarruz" target="_blank" rel="noreferrer">
          <img className="lg:h-16 lg:w-16 xs:h-12 xs:w-12 md:h-14 md:w-14 p-1.5 mb-1 transition hover:scale-110 duration-500"
          src="https://res.cloudinary.com/dhmkge0ia/image/upload/v1715981612/Porfolio/pngwing.com_32_gpsr47.png"
          alt="Facebook"
          />
        </a>
    
        </div>
      </div>
      </Fade>  
    </div>

      <form onSubmit={handleSubmit} className='z-10 md:w-[90%] lg:w-[80%] xl:w-[85%]'>
        <Fade cascade direction="right">
          <div className='z-10 text-white rounded-3xl bg-opacity-40 bg-black shadow-lg shadow-gray-800
          xs:w-[90%] xsm:w-[90%] xsl:w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[82%] 
          h-[90%] 
          xs:ml-[5%] xsm:ml-[5%] xsl:ml-[5%] sm:ml-[5%] md:ml-[5%] lg:ml-[11%] xl:ml-[11%]
          mt-[13%]
          mb-[5%] '>  
        <div className="w-[90%] mx-auto flex"> 
          <div className="w-[50%]">
            <label htmlFor="name" className="flex block font-semibold
            xs:mt-4
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Nombre"
              required
              autoComplete="nope"
              className={`flex mt-1 p-2 border border-white rounded-2xl text-white italic  bg-transparent placeholder-gray-500 w-[95%] focus:outline-none 
              xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base  ${errors.name ? 'border border-red-500' : 'border border-white'}`}             
 
            />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>  
              
          <div className="w-[50%] mx-auto">
            <label htmlFor="lastname" className="flex block font-semibold
            xs:mt-4
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
              Apellido
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={input.lastname}
              onChange={handleChange}
              placeholder="Apellido"
              required
              autoComplete="nope"
              className={`mt-1 p-2 border border-white rounded-2xl text-white italic bg-transparent placeholder-gray-500 w-full focus:outline-none
              xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.lastname ? 'border border-red-500' : 'border border-white'}`}             

            />
              {errors.lastname && <span className="text-red-500">{errors.lastname}</span>}
          </div>  
        </div>

        <div className="w-[90%] mx-auto mt-2">
          <label htmlFor="email" className="flex block font-semibold
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Ingrese su email - Ej.: email@mail.com"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border border-white rounded-2xl text-white italic bg-transparent placeholder-gray-500 w-full focus:outline-none
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.email ? 'border border-red-500' : 'border border-white'}`}             

            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        
        <div className="w-[90%] mx-auto mt-2">
          <label htmlFor="phone" className="flex block font-semibold
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Número de teléfono
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={input.phone}
            onChange={handleChange}
            placeholder="Ej.: +54 011 444-3345"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border border-white rounded-2xl text-white italic bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.phone ? 'border border-red-500' : 'border border-white'}`}
            />
            {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>

        <div className="w-[90%] mx-auto mt-2">
          <label htmlFor="subject" className="flex block font-semibold
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Asunto
          </label>          
          <input
            type="text"
            name="subject"
            id="subject"
            value={input.subject}
            onChange={handleChange}
            placeholder="Ej.: Motivo del mensaje"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border border-white rounded-2xl text-white italic bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.subject ? 'border border-red-500' : 'border border-white'}`}
            />
            {errors.subject && <span className="text-red-500">{errors.subject}</span>}
        </div>

        <div className="w-[90%] mx-auto mt-2">
          <label htmlFor="message" className="flex block font-semibold
          xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={input.message}
            onChange={handleChange}
            placeholder="Haceme llegar tu mensaje"
            required
            autoComplete="nope"
            className={`mt-1 p-2 border border-white rounded-2xl text-white italic bg-transparent placeholder-gray-500 w-full focus:outline-none 
            xs:text-xs xsm:text-base xsl:text-base sm:text-base md:text-base lg:text-base xl:text-base ${errors.message ? 'border border-red-500' : 'border border-white'}`}
          ></textarea>
            {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
       
        <div className="w-[90%] mx-auto pb-3">
          <button
            type="submit"
            // onSubmit={handleSubmit}
            className={`mb-4 mt-8 block w-full text-white font-semibold py-3 px-4 rounded-full ${Object.values(errors).some(error => error !== "") || !inputLleno ? "bg-gray-600 cursor-not-allowed" : "bg-[#216651] hover:bg-sky-500 hover:text-black"}`}
            disabled={Object.values(errors).some(error => error !== "") || !inputLleno}
            title={Object.values(errors).some(error => error !== "") ? Object.values(errors).join(", ") : !inputLleno ? "Por favor, completa todos los campos correctamente" : ""}
            style={{
              boxShadow: "4px 4px 8px 0 rgba(0, 0, 0, 0.5), 10px 2px 4px 1px rgba(0, 0, 0, 0.06)"
            }}
            >ENVIAR
          </button>
        </div>     

          </div>
        </Fade>  
      </form>

  </div>
  
  );   
}

export default Contact;