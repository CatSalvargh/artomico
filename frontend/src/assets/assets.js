import blueflower1 from './blueflower1.jpg'
import blueflower2 from './blueflower2.jpg'
import blueflower3 from './blueflower3.jpg'
import abstractcolors from './abstract_colors.jpg'
import logo from './logo.png'
import search_icon  from './search_icon.png'
import basket_icon  from './basket_icon.png'

import option_1  from './calm_essence.jpg'
import option_2  from './mental_health.jpg'
import option_3  from './clearmind_sq.jpg'
import option_4  from './painting_sq.png'

import paintinghand from './paintinghand.jpg'
import inspiration from './inspiracion.jpg'
import pinkjournal from './pink_journal.jpg'
import ballerina_lg from './ballerina_lg.jpg'
import profile_pic from './profile_closeup.png'
import dropdown_icon from './dropdown.png'

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
    dropdown_icon
}

export const option_list = [
    {
        option_name: '1:1 Session',
        option_img: option_1,
        service: 'individual'
    },
    {
        option_name: 'Group Session',
        option_img: option_2,
        service: 'group'
    },
    {
        option_name: 'Events',
        option_img: option_3,
        service: 'events'
    },
    {
        option_name: 'special migration',
        option_img: option_4,
        service: 'migration'

    }
]

export const service_list = [
   { _id: "1",
    name: "Arte terapia",
    img: paintinghand,
    description: `La Arte terapia es una disciplina que utiliza los recursos expresivos del arte y del proceso creativo para promover el bienestar emocional, el autoconocimiento y desarrollo personal, así como para explorar emociones que a menudo puede ser difícil expresar con palabras.`,
    category: "service",
   },
   { _id: "2",
    name: "Testimonios",
    img: inspiration,
    description: `Conoce nuestros talleres y lo que cuentan otras personas que ya han comenzado su autodescubrimiento a través de su creatividad. No es necesario ser un gran artista para ser creativo y empezar con la arteterapia. Solo hace falta dejarse llevar por lo que el proceso va indicando en cada momento.`,
    category: "reading",
   },
   { _id: "3",
    name: "Consejos y lecturas",
    img: ballerina_lg,
    description: `En esta sección podrás encontrar artículos y estudios en relación a la Arteterapia y su eficacia en el tratamiento y prevención de algunas de las más comunes dolencias emocionales y la evidencia que avala esta técnica gentil y poderosa.`,
    category: "reading"
   },
]