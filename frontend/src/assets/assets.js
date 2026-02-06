import abstractcolors from './abstract_colors.jpg'
import logo from './logo.png'
import logo_full from './logo_full.png'
import about from './about.jpg'

import option_1  from './adult2_sq.jpg'
import option_2  from './kids2.jpg'
import option_3  from './group3_sq.jpg'
import option_4  from './group2_sq.jpg'

import paintinghand from './paintinghand.jpg'
import profile_pic from './profile_closeup.png'
import dropdown_icon from './dropdown.png'
import migrate from './migrar_sq.jpg'
import adult from './adult_sq.jpg'
import kids from './kids.jpg'
import kids2 from './kids2.jpg'
import kids4 from './kids4.jpg'
import banner_img3 from './hand_plume.png'
import ballerina_lg from './ballerina_lg.jpg'
import inspiration from './inspiration.jpg'

export const assets = { 
    about, 
    abstractcolors,
    logo, 
    logo_full,
    paintinghand,
    profile_pic,
    dropdown_icon,
    banner_img3
}

export const option_list = [
    {
        option_name: 'Adulto',
        option_img: option_1,
        servicetype: 'adults'
    },
    {
        option_name: 'Niños',
        option_img: option_2,
        servicetype: 'kids'
    },
    {
        option_name: 'Grupos',
        option_img: option_3,
        servicetype: 'group'
    },
    {
        option_name: 'Profesionales y Escuelas',
        option_img: option_4,
        servicetype: 'pro_Schools'

    },
    {
        option_name: 'Soporte migración',
        option_img: kids4,
        servicetype: 'migration'

    }
]

export const service_list = [
   { _id: "1_adult",
    name: "Adultos",
    name2: "Arteterapia adultos",
    img: paintinghand,
    description: `La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal`,
    servicetype: "adults",
    price: '45',
    duration: '1h30m'
   },
   { _id: "2_kids",
    name: "Niños",
    name2: "Arteterapia niños",
    img: kids,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    servicetype: "kids",
    price: '45',
    duration: '1h30m'
   },
   { _id: "4_group",
    name: "Grupos",
    name2: "Sesión grupal",
    img: adult,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar con la arteterapia.`,
    servicetype: "groups",
    price: '45',
    duration: '1h30m'
   },
   { _id: "5_group_pro",
    name: "Escuelas y profesionales",
    name2: "sesion profesionales",
    img: kids2,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    servicetype: "pro_Schools",
    price: '45',
    duration: '1h30m'
   },
   { _id: "6_reading",
    name: "Opiniones",
    name2: "Opiniones",
    img: inspiration,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    servicetype: "reading",
    price: '45',
    duration: '1h30m'
   },
   { _id: "7_reading",
    name: "Consejos y lecturas",
    name2: "consejos y lecturas",
    img: ballerina_lg,
    description: `En esta sección podrás encontrar artículos y estudios en relación a la Arteterapia y su eficacia en el tratamiento y prevención de algunas de las más comunes dolencias emocionales y la evidencia que avala esta técnica gentil y poderosa.`,
    servicetype: "reading"
   },
     { _id: "8_adult",
    name: "Adulto migración",
    name2: "Soporte migración adulto",
    img: migrate,
    description: `La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal.`,
    servicetype: "adults",
    price: '45',
    duration: '1h30m'
   },
   { _id: "3_kids",
    name: "Niños migración",
    name2: "Soporte migración niño",
    img: kids4,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    servicetype: "kids",
    price: '45',
    duration: '1h30m'
   },
]


