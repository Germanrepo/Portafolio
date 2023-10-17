// Hook
import { useState } from 'react'

// Necesario para saber la cantidad de proyectos
import { dataProjects } from '../util/dataProjects'

export default function useMov() {
    const [mov, setMov] = useState(100)
    const [leftMov, setLeft] = useState(-100)
    const [rightMov, setRight] = useState(100)

    const left = () => {
        if (leftMov < 0) {
            setLeft(leftMov + mov)
            setRight(rightMov - mov)
        }
    }
    const right = () => {
        const projectNum = dataProjects.length
        const carouselWidth = projectNum * 100

        if (rightMov < (carouselWidth - 100)) {
            setRight(rightMov + mov)
            setLeft(leftMov - mov)
        }
    }

    return { leftMov, left, right }

}