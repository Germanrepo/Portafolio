import styleSkills from '../../styles/Contenido/Habilidades.module.css'

import { FaReact } from 'react-icons/fa'
import { SiCss3, SiMysql, SiHtml5 } from 'react-icons/si'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { BsBootstrapFill } from 'react-icons/bs'

import useIntersectionObserver from '../../Hooks/useIntersectionObserver'
import { useState } from 'react'

export default function Habilidades() {
    const [icon, setIcons] = useState([<SiHtml5 />, < SiCss3 />, < IoLogoJavascript />, <FaReact />, <IoLogoNodejs />, <SiMysql />, <BsBootstrapFill />])

    const [elementRef, intersecting] = useIntersectionObserver({
        threshold: 1
    })

    return (
        <section id="Habilidades" className={styleSkills.containerSkills}>
            <article className={styleSkills.skills}>

                <div className={`${styleSkills.icons} ${styleSkills.icon1} ${intersecting && styleSkills.tranlateElement1}`}>
                    <SiHtml5 />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon2} ${intersecting && styleSkills.tranlateElement2}`}>
                    < SiCss3 />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon3} ${intersecting && styleSkills.tranlateElement3}`}>
                    < IoLogoJavascript />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon4} ${intersecting && styleSkills.tranlateElement4}`}>
                    <FaReact />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon5} ${intersecting && styleSkills.tranlateElement5}`}>
                    <IoLogoNodejs />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon6} ${intersecting && styleSkills.tranlateElement6}`}>
                    <SiMysql />
                </div>

                <div className={`${styleSkills.icons} ${styleSkills.icon7} ${intersecting && styleSkills.tranlateElement7}`}>
                    <BsBootstrapFill />
                </div>

                <div ref={elementRef} className={styleSkills.observer}></div>
            </article>
        </section>
    )
}