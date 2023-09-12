import { motion } from "framer-motion";

const animationConfiguration = {
    initial: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
    animate: { opacity: 1, clipPath: 'inset(0 0 0 0)' },
    exit: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
}

export default function Transition({ children }) {
    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1}}
        >
            {children}
        </motion.div>
    )
}
