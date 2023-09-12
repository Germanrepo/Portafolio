import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Inicio from './Components/Presentacion/Inicio'
import Portafolio from './Components/Portafolio/Portafolio'

import './resetApp.css'

const Animated = () => {
    const location = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route exact path='/' element={<Inicio />}></Route>
                <Route exact path='/portafolio' element={<Portafolio />}></Route>
            </Routes>
        </AnimatePresence>

    )
}

export default function App() {

    return (
        <Router>
            <Animated />
        </Router>
    )
}