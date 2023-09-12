import { useState, useRef, useEffect } from "react"


export default function useIntersectionObserver(options = {}) {
    const [intersecting, setIntersecting] = useState(false)
    const elementRef = useRef()

    useEffect(() => {
        const elemento = elementRef.current

        const observer = new IntersectionObserver((entry) => {

            entry.forEach(e => {                
                if(e.isIntersecting){
                    setIntersecting(true)
                }
            })
        }, options)

        if (elemento) {
            observer.observe(elemento)
        }

        return () => {
            if (elemento) {
                observer.unobserve(elemento)
            }
        }
    }, [options])

    return [elementRef, intersecting]
}