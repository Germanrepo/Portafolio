import { FaBars, FaHome } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { BsCode } from 'react-icons/bs'
import { BsGrid3X3GapFill } from 'react-icons/bs'

import styleHeader from '../../styles/Navegacion/Header.module.css'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [value, setValue] = useState(false)

    const revealer = () => {
        if (value) {
            setValue(false)
        } else {
            setValue(true)
        }
    }

    useEffect(() => {
        const descript = document.getElementById('descript')
        let descTimer
        document.querySelectorAll('.ico').forEach((e, i) => {
            e.addEventListener('click', () => {
                if (window.innerWidth < 920) {
                    if (i === 0) {
                        clearTimeout(descTimer)
                        descript.innerText = 'Perfil'
                        
                        descTimer = setTimeout(() => {
                            descript.style = 'opacity: 0'
                        }, 2000)
                    } else if (i === 1) {
                        clearTimeout(descTimer)
                        descript.innerText = 'Habilidades'
                        
                        descTimer = setTimeout(() => {
                            descript.style = 'opacity: 0'
                        }, 2000)
                    } else {
                        clearTimeout(descTimer)
                        descript.innerText = 'Proyectos'

                        descTimer = setTimeout(() => {
                            descript.style = 'opacity: 0'
                        }, 2000)
                    }
                    descript.style = 'opacity: 1'

                }
            })
        })
        return () => clearTimeout(descTimer)
    }, [])


    return (
        <header className={`${styleHeader.container}`}>
            <section className={`${styleHeader.containerBtn}`}>
                <button onClick={revealer} className={`${styleHeader.btn}`}>
                    <FaBars />
                </button>
            </section>

            <section className={`${styleHeader.containerNav}`}>

                <nav className={`${styleHeader.navExpand} ${value && styleHeader.expandReveal}`}>
                    <ul className={`${styleHeader.navItems}`}>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><a href="#Perfil">Perfil</a></li>
                        <li><a href="#Habilidades">Habilidades</a></li>
                        <li><a href="#Proyectos">Proyectos</a></li>
                    </ul>
                </nav>

                <nav className={`${styleHeader.navIcons}`}>
                    <ul className={`${styleHeader.icons}`}>
                        <li>
                            <Link to={'/'}><FaHome /></Link>
                        </li>
                        <li className='ico'>
                            <a href="#Perfil"><IoMdContact /></a>
                        </li>
                        <li className='ico'>
                            <a href="#Habilidades"><BsCode /></a>
                        </li>
                        <li className='ico'>
                            <a href="#Proyectos"><BsGrid3X3GapFill /></a>
                        </li>
                    </ul>

                    <p className={styleHeader.descript} id='descript'></p>
                </nav>

            </section>

        </header>
    )
}