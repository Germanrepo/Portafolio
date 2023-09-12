import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Transition from '../Transicion/Transition'

import styleInicio from '../../styles/Presentacion/Inicio.module.css'

import imgLogo from '../../assets/images/Logo.png'

export default function Inicio() {
    const [value, setValue] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <Transition>
            <div className={styleInicio.containerInit}>
                <div 
                className={`${styleInicio.contLogo} ${value && styleInicio.clearOpacity}`}>
                    <div className={`${styleInicio.spinner} ${value && styleInicio.stopAnimation}`}></div>
                    <img src={imgLogo} alt="Logo" 
                    className={`${styleInicio.logo} ${value && styleInicio.stopAnimation}`}/>
                </div>
                <article className={styleInicio.init}>
                    <div className={styleInicio.containerText}>
                        <p className={`${styleInicio.text} ${styleInicio.t1} ${value && styleInicio.revealOpacity}`}>¡Hola!</p>
                        <p className={`${styleInicio.text} ${styleInicio.t2} ${value && styleInicio.revealOpacity}`}>Me llamo Germán</p>
                        <p className={`${styleInicio.text} ${styleInicio.t3} ${value && styleInicio.revealOpacity}`}>y</p>
                        <p className={`${styleInicio.text} ${styleInicio.t4} ${value && styleInicio.revealOpacity}`}>este es mi portafolio</p>
                    </div>

                    <button className={`${styleInicio.btn} ${value && styleInicio.revealOpacity}`}>
                        <Link className={styleInicio.link} to={'/portafolio'}>Ver</Link>
                    </button>
                </article>
            </div>
        </Transition>
    )
}
