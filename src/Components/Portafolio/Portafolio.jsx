// Componentes del contenido
import Header from '../Navegacion/Header'
import Main from '../Contenido/Main'

// Componente de transicion
import Transition from '../Transicion/Transition'

export default function Portafolio() {

    return <Transition>
        <Header />
        <Main />
    </Transition>
}