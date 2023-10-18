// Componente de transicion
import Transition from '../Transicion/Transition'

// Estilos
import styleInicio from '../../styles/Carga/Load.module.css'

// Logo 
import logo from '../../assets/images/Logo.png'

export default function Load() {

    return <Transition>
        <section className={styleInicio.contLogo}>
            <span className={styleInicio.spinner}></span>
            <img src={logo} loading='lazy' alt="Logo" className={styleInicio.logo} />
        </section>
    </Transition>

}
