import blueflower1 from './blueflower1.jpg'
import blueflower2 from './blueflower2.jpg'
import blueflower3 from './blueflower3.jpg'
import abstractcolors from './abstract_colors.jpg'
import logo from './logo.png'
import search_icon  from './search_icon.png'
import basket_icon  from './basket_icon.png'

import option_1  from './adult2_sq.jpg'
import option_2  from './kids2.jpg'
import option_3  from './group3_sq.jpg'
import option_4  from './group2_sq.jpg'

import paintinghand from './paintinghand.jpg'
import inspiration from './inspiracion.jpg'
import pinkjournal from './pink_journal.jpg'
import ballerina_lg from './ballerina_lg.jpg'
import profile_pic from './profile_closeup.png'
import dropdown_icon from './dropdown.png'
import migrate from './migrar_sq.jpg'
import migrate2 from './migrar2_sq.jpg'
import adult from './adult_sq.jpg'
import kids from './kids.jpg'
import kids1 from './kids1.jpg'
import kids2 from './kids2.jpg'
import kids3 from './kids3.jpg'
import kids4 from './kids4.jpg'
import banner_img from './happy_nbg.png'
import banner_img2 from './happy_2_nbg.png'
import banner_img3 from './hand_plume.png'

export const assets = {
    blueflower1, 
    blueflower2,
    blueflower3,
    abstractcolors,
    logo, 
    search_icon,
    basket_icon,
    paintinghand,
    inspiration,
    pinkjournal,
    ballerina_lg,
    profile_pic,
    dropdown_icon,
    banner_img,
    banner_img2,
    banner_img3
}

export const option_list = [
    {
        option_name: 'Adulto',
        option_img: option_1,
        service: 'individual'
    },
    {
        option_name: 'Niños',
        option_img: option_2,
        service: 'group'
    },
    {
        option_name: 'Grupos',
        option_img: option_3,
        service: 'events'
    },
    {
        option_name: 'Profesionales y Escuelas',
        option_img: option_4,
        service: 'migration'

    },
    {
        option_name: 'Soporte migración',
        option_img: kids4,
        service: 'migration'

    }
]

export const info_list = [
   { _id: "1_adult",
    name: "Arteterapia adultos",
    img: paintinghand,
    description: `La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal`,
    category: "adults",
   },
   { _id: "2_kids",
    name: "Niños",
    img: kids,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    category: "kids",
   },
   { _id: "4_group",
    name: "Grupos",
    img: adult,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar con la arteterapia.`,
    category: "groups",
   },
   { _id: "5_group_pro",
    name: "Escuelas y profesionales",
    img: kids2,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    category: "groups",
   },
   { _id: "6_reading",
    name: "Opiniones",
    img: inspiration,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    category: "reading",
   },
   { _id: "7_reading",
    name: "Consejos y lecturas",
    img: ballerina_lg,
    description: `En esta sección podrás encontrar artículos y estudios en relación a la Arteterapia y su eficacia en el tratamiento y prevención de algunas de las más comunes dolencias emocionales y la evidencia que avala esta técnica gentil y poderosa.`,
    category: "reading"
   },
     { _id: "8_adult",
    name: "Adulto migración",
    img: migrate,
    description: `La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal.`,
    category: "adults",
   },
   { _id: "3_kids",
    name: "Niños migración",
    img: kids4,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar.`,
    category: "kids",
   },
]


