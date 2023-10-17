// Estilos
import styleProfile from '../../styles/Contenido/Perfil.module.css'

// Foto
import foto from '../../assets/images/perfil.png'

// Iconos
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'

// Datos de contacto
import { dataContact } from '../../util/dataContact'

export default function Perfil() {
    const copy = () => {
        navigator.clipboard.writeText(dataContact.email)
    }

    return <section id="Perfil" className={styleProfile.containerProfile}>
        <article className={styleProfile.profile}>

            <div className={styleProfile.containerImg}>
                <img loading='lazy' className={styleProfile.img} src={foto} alt="mifoto" />
            </div>

            <div className={styleProfile.containerInform}>
                <div className={styleProfile.containerTitle}>
                    <h1 className={styleProfile.title1}>Germán Centurión</h1>
                    <h2 className={styleProfile.title2}>Full Stack Developer</h2>
                </div>

                <ul className={styleProfile.contact}>

                    <li>
                        <a className={styleProfile.social} target='_blank' title='Ir a Linkedin' href={dataContact.linkedin}>
                            <FaLinkedinIn />
                        </a>
                    </li>

                    <li>
                        <a className={styleProfile.social} target='_blank' title='Ir a Twitter' href={dataContact.twitter}>
                            <AiOutlineTwitter />
                        </a>
                    </li>

                    <li>
                        <div className={styleProfile.email} >
                            <p className={styleProfile.text}>{dataContact.email}</p>
                            <div className={styleProfile.copy} title='Copiar Email' onClick={copy}>
                                <MdContentCopy />
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

        </article>
    </section>
}