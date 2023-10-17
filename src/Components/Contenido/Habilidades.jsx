// Estilos
import styleSkills from '../../styles/Contenido/Habilidades.module.css'

// Hook
import useIntersectionObserver from '../../Hooks/useIntersectionObserver'

// Iconos
import { dataSkills } from '../../util/dataSkills'

export default function Habilidades() {
    const [elementRef, intersecting] = useIntersectionObserver({
        threshold: 1
    })

    return <section id="Habilidades" className={styleSkills.containerSkills}>
        <article className={styleSkills.skills}>
            {dataSkills.map((e, i) => {
                return <div key={i} className={`${styleSkills.icon} ${intersecting ? styleSkills.show : ''}`}>
                    {e.icon}
                </div>
            })}
            <div ref={elementRef} className={styleSkills.observer}></div>
        </article>
    </section>
}