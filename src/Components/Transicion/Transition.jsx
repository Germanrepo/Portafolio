// Libreria para la transicion
import { motion } from "framer-motion";

// Estilos
import '../../styles/Portafolio/Portafolio.css'

// Hook
import { useState } from "react";

export default function Transition({ children }) {
    const [animationConfiguration] = useState({
        initial: { opacity: 0, },
        animate: { opacity: 1, },
        exit: { opacity: 0, },
    })
    return <motion.section className='container__portfolio'
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: .5 }}
    >
        {children}
    </motion.section>
}
