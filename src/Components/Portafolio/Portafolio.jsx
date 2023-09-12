import Header from '../Navegacion/Header'
import Main from '../Contenido/Main'
import Transition from '../Transicion/Transition'

import '../../styles/Portafolio/Portafolio.css'

export default function Portafolio() {

    return (
        <Transition>
            <div className='containerPortfolio'>
                <Header />
                <Main />
            </div>
        </Transition>
    )
}