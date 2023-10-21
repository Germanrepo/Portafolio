// Estilos
import styleProjects from '../../styles/Contenido/Proyectos.module.css'

// Iconos
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'
import { VscGithub } from 'react-icons/vsc'
import { CgWebsite } from 'react-icons/cg'

// Hooks
import { useRef } from 'react'
import useMov from '../../Hooks/useMov'
import useCarousel from '../../hooks/useCarousel.jsx'

// Utilidades
import { dataProjects } from '../../util/dataProjects'
import { turnBack, turnFront } from '../../util/fuctionsTurn'


export default function Proyectos() {

    let carouselRef = useRef()
    let boxCardRef = useRef([])
    let cardRef = useRef([])

    const { leftMov, left, right } = useMov()
    useCarousel(carouselRef, boxCardRef, cardRef, leftMov)

    return <section className={styleProjects.containerProjects} id='Proyectos'>
        <section className={styleProjects.model}>

            <section className={`${styleProjects.carousel}`} ref={carouselRef}>
                {dataProjects.map((element, i) => {
                    return <article key={i} className={styleProjects.boxCard} ref={e => boxCardRef.current[i] = e}>
                        <article className={styleProjects.card} ref={e => cardRef.current[i] = e}>

                            <article className={styleProjects.front}>
                                <div className={styleProjects.contImg}>
                                    <img loading='lazy' src={element.img} alt={element.name} />
                                </div>

                                <ul className={styleProjects.contLinks}>
                                    <li>
                                        <a target='_blank' className={styleProjects.link} title='Página' href={element.url}><CgWebsite /></a>
                                    </li>
                                    <li>
                                        <a target='_blank' className={styleProjects.link} title='Repositorio' href={element.github}><VscGithub /></a>
                                    </li>
                                </ul>
                                <ul className={styleProjects.boxTurn}>
                                    <li className={styleProjects.turn} onClick={turnFront}>Info</li>
                                </ul>
                            </article>

                            <article className={styleProjects.back}>
                                <div className={styleProjects.boxDescript}>
                                    <p className={styleProjects.descript}>
                                        {element.descript}
                                    </p>
                                </div>

                                <ul className={styleProjects.boxTurn}>
                                    <li className={styleProjects.turn} onClick={turnBack}>Volver</li>
                                </ul>
                            </article>
                        </article>
                    </article>
                })}
            </section>

            <section className={styleProjects.containerBtn}>
                <button className={styleProjects.btn} onClick={left}><AiFillCaretLeft /></button>
                <button className={styleProjects.btn} onClick={right}><AiFillCaretRight /></button>
            </section>

        </section>
    </section>
}