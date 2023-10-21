import portafolio from '../assets/images/portafolio.png'
import tateti from '../assets/images/tateti.png'
import misProyectosWeb from '../assets/images/misProyectosWeb.png'

export const dataProjects = [
    {
        name: 'Portafolio',
        img: portafolio,
        url: 'https://www.centudev.com/',
        github: 'https://github.com/Germanrepo/Portafolio.git',
        descript: 'Creado con ReactJS y estilizado con CSS puro, React Icons y Framer Motion. Como se puede notar, el diseño es bastante mediocre, ya que lo fui diseñando y programando sobre la marcha debido a que quería desplegarlo lo antes posible, pero es por seguro de que lo iré mejorando con el tiempo.'
    },

    {
        name: 'Tateti',
        img: tateti,
        url: 'https://tateti-project-psi.vercel.app/',
        github: 'https://github.com/Germanrepo/tatetiProject.git',
        descript: 'En el proyecto, utilicé HTML, CSS y JavaScript puro para la creación de este clásico juego.'

    },

    {
        name: 'Mis proyectos web',
        img: misProyectosWeb,
        url: 'https://render-mis-proyectos.onrender.com/',
        github: 'https://github.com/Germanrepo/CRUD-Nodejs-Project.git',
        descript: 'CRUD API REST desarrollada con Node.js, Express, MySQL, plantillas EJS y Bootstrap 5. Incluye funciones de registro, inicio de sesión y validación de usuarios.'

    }
]
