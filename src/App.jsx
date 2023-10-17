import Load from './Components/Carga/Load'
import Portafolio from './Components/Portafolio/Portafolio'

import './resetApp.css'
import { useEffect, useState } from "react"

export default function App() {
    const [done, setDone] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setDone(true), 2800)
        return () => clearTimeout(timer)
    }, [])

    return <>
        {!done ? (<Load />) : (<Portafolio />)}
    </>
}