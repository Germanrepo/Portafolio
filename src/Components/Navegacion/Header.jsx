// Estilos
import styleHeader from '../../styles/Navegacion/Header.module.css'

// Iconos
import { FaBars } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { BsCode } from 'react-icons/bs'
import { BsGrid3X3GapFill } from 'react-icons/bs'

// util
import { useRef } from 'react'

export default function Header() {
    const navRef = useRef()
    const revealNav = () => {
        navRef.current.classList.toggle(styleHeader.navReveal)
    }

    return <header className={styleHeader.header}>
        <section className={styleHeader.container}>

            <div className={styleHeader.bar} onClick={revealNav}>
                <FaBars />
            </div>

            <nav className={styleHeader.nav} ref={navRef}>
                <ul className={styleHeader.boxLink}>
                    <li>
                        <a href="#Perfil" className={styleHeader.link}>
                            <IoMdContact className={styleHeader.linkIcon} />
                            <span className={styleHeader.linkName}>Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Habilidades" className={styleHeader.link}>
                            <BsCode className={styleHeader.linkIcon} />
                            <span className={styleHeader.linkName}>Habilidades</span>
                        </a>
                    </li>
                    <li>
                        <a href="#Proyectos" className={styleHeader.link}>
                            <BsGrid3X3GapFill className={styleHeader.linkIcon} />
                            <span className={styleHeader.linkName}>Proyectos</span>
                        </a>
                    </li>
                </ul>
            </nav>

        </section>
    </header>
}