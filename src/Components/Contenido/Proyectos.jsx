import styleProjects from '../../styles/Contenido/Proyectos.module.css'

import portafolio from '../../assets/images/portafolio.png'
import tateti from '../../assets/images/tateti.png'
import misTareas from '../../assets/images/mis-tareas.png'

import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'

import { useEffect, useState } from 'react'

export default function Proyectos() {

    const [project, setProject] = useState([
        {img: portafolio, url: 'https://www.google.com', github: 'https://www.google.com'},
        {img: tateti},
        {img: misTareas}
    ])

    useEffect(() => {
        const carousel = document.querySelector('.carousel')
        const boxCard = document.querySelectorAll('.boxCard')
        const lastBoxCard = boxCard[boxCard.length - 1]
        carousel.insertAdjacentElement('afterbegin', lastBoxCard)
    }, [])

    const left = () => {
        const carousel = document.querySelector('.carousel')
        const boxCard = document.querySelectorAll('.boxCard')
        const lastBoxCard = boxCard[boxCard.length - 1]

        document.querySelector('.offButtons').style = 'pointer-events: none'
        document.querySelector('.carousel').style = `margin-left: 0%; transition: margin-left .7s`
        
        setTimeout(() => {
            carousel.insertAdjacentElement('afterbegin', lastBoxCard)
            document.querySelector('.carousel').style = `margin-left: -100%;`
            document.querySelector('.offButtons').style = 'pointer-events: inherit'
        }, 700)
        
        
    }
    const right = () => {
        const carousel = document.querySelector('.carousel')
        const boxCard = document.querySelectorAll('.boxCard')
        const firstBoxCard = boxCard[0]
        
        document.querySelector('.offButtons').style = 'pointer-events: none'
        document.querySelector('.carousel').style = `margin-left: -200%; transition: margin-left .7s;`
        
        setTimeout(() => {
            carousel.insertAdjacentElement('beforeend', firstBoxCard)
            document.querySelector('.carousel').style = `margin-left: -100%;`
            document.querySelector('.offButtons').style = 'pointer-events: inherit'
        }, 700)

    }


    return (
        <section id="Proyectos" className={styleProjects.containerProjects}>
            <section className={styleProjects.projects}>

                <div className={`${styleProjects.carousel} ${'carousel'}`}>
                    {project.map((p, i) => {
                        return <div key={i} className={`${styleProjects.boxCard} ${'boxCard'}`}>
                            <article className={`${styleProjects.card}`}>
                                <div className={styleProjects.contImg}>
                                    <img loading='lazy' src={p.img} alt={`Proyecto Nro ${i + 1}`} />
                                </div>
                                <ul className={styleProjects.contLinks}>
                                    <li>
                                        <a target='_blank'href={p.url ? p.url : '#'}>
                                            <CgWebsite className={styleProjects.icon}/>
                                            Página
                                        </a>
                                    </li>

                                    <li>
                                        <a target='_blank' href={p.github ? p.github : '#'}>
                                            <VscGithub className={styleProjects.icon}/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    })}
                </div>

                <ul className={`${styleProjects.containerBtn} ${'offButtons'}`}>
                    <li className={styleProjects.btn} onClick={left}><IoMdArrowDropleftCircle /></li>
                    <li className={styleProjects.btn} onClick={right}><IoMdArrowDroprightCircle /></li>
                </ul>

            </section>
        </section>
    )
}