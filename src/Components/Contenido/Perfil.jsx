import styleProfile from '../../styles/Contenido/Perfil.module.css'
import fotoPerfil from '../../assets/images/fotoPerfil.png'

import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { useState } from 'react'


export default function Perfil() {
    const [url, setUrl] = useState({
        linkedin: "https://ar.linkedin.com/in/germ%C3%A1n-centuri%C3%B3n-282542256?trk=people-guest_people_search-card",
        twitter: "https://twitter.com/Germansetto"
    })

    const copy = () => {
        navigator.clipboard.writeText('gecenturion99@gmail.com')
    }

    return (
        <section id="Perfil" className={styleProfile.containerProfile}>
            <article className={styleProfile.profile}>

                <div className={styleProfile.containerImg}>
                    <img loading='lazy' className={styleProfile.img} src={fotoPerfil} alt="ejemplo" />
                </div>

                <div className={styleProfile.containerInform}>
                    <div className={styleProfile.containerTitle}>
                        <h1 className={styleProfile.title1}>Germán Centurión</h1>
                        <h2 className={styleProfile.title2}>Full Stack Developer</h2>
                    </div>

                    <ul className={styleProfile.contact}>

                        <li className={styleProfile.social} title='Ir a Linkedin'>
                            <a target='_blank' href={url.linkedin}>
                                <FaLinkedinIn />
                            </a>
                        </li>

                        <li className={styleProfile.social} title='Ir a Twitter'>
                            <a target='_blank' href={url.twitter}>
                                <AiOutlineTwitter />
                            </a>
                        </li>

                        <li className={styleProfile.email} onClick={copy}>
                            <div className={styleProfile.div}>
                                <p className={styleProfile.text}>gecenturion99@gmail.com</p>
                                <div className={styleProfile.copy} title='Copiar Email' onClick={copy}>
                                    <MdContentCopy />
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </article>
        </section>
    )
}