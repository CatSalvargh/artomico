import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-4 md:px-18 mt-12'>
        <div  className='text-center text-2xl text-primary font-semibold'>
          <h1 className='lg:text-left'>Sobre Nosotras</h1>
        </div>

    <div className='flex flex-col items-center lg:flex-row lg:items-start pt-4 gap-5 lg:gap-12 mt-4 text-justify'>
        <img className='w-full xs:w-55 lg:mt-25 rounded-full' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-4 mt-5 text-sm md:text-md text-darkGray'>
          <h2  className='text-lg text-primary font-semibold text-center'>Bienvenid@ a Artómica</h2>
          <p>Este es un espacio en el que regresar a la calma, en el que reencontrarte con tu yo interior, expresado a través de tu creatividad. Un espacio sin presiones, sin agobios, en el que simplemente desconectar del mundo de fuera para reencontrarte con el de dentro.
          <br /><br />
          Catherine Salazar, graduada en Bellas Artes por la Universidad Politécnica de Valencia, España, es la fundadora de este proyecto, que surgió a partir de una transformadora experiencia personal. Casi sin darse cuenta experimentó en primera persona el extraordinario poder del <span className='font-semibold text-primary'> "estado de flow"</span>  artístico para curar dolencias emocionales, que muchas veces se encuentran escondidas en lo profundo del inconsciente. Fue el arte el que le ayudó a encontrar significado a la experiencia dolorosa del desarraigo en la adolescencia y otras experiencias vividas a lo largo de su vida.
          <br /><br />A partir estas experiencias personales intangibles, empezó a interesarse por el estudio del arte como medio de sanación y así llegó a conocer la Arteterapia, su historia y aplicaciónes actuales.
          A partir de ese momento, retomó sus estudios con un Master universitario en Arteterapia, y hoy, desde esta plataforma acompaña a personas a también encontrar su propio camino de sanación a través del proceso creativo, mientras profundiza en sus estudios de psicología, con un planteamiento humanista e integrativo.
          </p>
          <h2 className='text-lg text-primary font-semibold text-center'>Nuestra Misión</h2>
          <p>En Artómica tenemos dos misiones. Por un lado, queremos acercar a las personas a su sabiduría interna, a encontrar las raices profundas de sus miedos y padecimientos y a encontrar habilidades y fortalezas hasta ahora desconocidad.
          <br /> <br />
          Por otro lado, difundimos cuán sutil, pero poderoso es el arte, no sólo como expresión estética, sino como herramienta para explorar rincones a los que las palabras a veces no llegan.
          La Arteterapia no compite con los métodos tradicionales, los complementa.
          </p>
        </div>
      </div>

      <div className='text-darkGray mt-8 md:mt-12'>
        <p>¿Cómo hacemos la <span className='font-bold text-center md:text-left text-primary'>diferencia?</span></p>
      </div>

      <div className='grid md:grid-cols-[repeat(3,1fr)] gap-5 md:gap-12 text-darkGray text-justify text-sm md:text-md py-3'>
        <div className='p-5 hover:bg-extraLight cursor-pointer transition-all duration-200'>
          <h3 className='text-primary my-2 font-medium'>Escuchamos</h3>
          <p>Estamos aquí para escucharte primero, saber en qué momento de tu vida te encuentras, en qué quieres enfocarte y cuáles son tus objetivos.


            <br />Incluso aunque no parezcan claros, estamos aquí para ayudarte a dar el siguiente paso.
          </p>
        </div>
        <div className='p-5 hover:bg-extraLight cursor-pointer'>
          <h3 className='text-primary my-2 font-medium'>Personalizamos</h3>
          <p>No hay dos personas iguales, y tampoco dos caminos iguales. Por eso, una vez definimos tus objetivos, diseñamos una hoja de ruta personalizada para tu caso específico. No es rígiga y seguro irá cambiando contigo, pero nos dará las bases necesarias para ponernos en marcha</p>
        </div>
        <div className='p-5 hover:bg-extraLight cursor-pointer'>
          <h3 className='text-primary my-2 font-medium'>Acompañamos, no dirigimos</h3>
          <p>El camino es tuyo, nosotros solo te acompañamos a irlo descubriendo a tu ritmo.
            No presionamos, no imponemos nuestro significado a la expresión de tu creatividad. Te guíamos a encontrar el tuyo propio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
