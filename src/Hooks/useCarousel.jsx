// Hook
import { useEffect } from "react"

// Necesario para saber la cantidad de proyectos
import { dataProjects } from "../util/dataProjects"

export default function useCarousel(carouselRef, boxCardRef, cardRef, leftMov) {

    useEffect(() => {
        const projectNum = dataProjects.length
        const carouselWidth = projectNum * 100

        carouselRef.current.style = `margin-left: ${leftMov}%; width: ${carouselWidth}%`

        cardRef.current.forEach((card, i) => {
            let position = i * -100

            if (leftMov === position) {
                boxCardRef.current[i].style = 'opacity: 1; pointer-events: inherit;'
                card.style = 'scale: 1.05'
            } else {
                boxCardRef.current[i].style = 'opacity: .3; pointer-events: none;'
                card.style = 'scale: 1; transform: rotateY(0deg)'
            }
        })

    }, [leftMov])
}