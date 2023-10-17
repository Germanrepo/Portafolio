import Perfil from "./Perfil"
import Habilidades from "./Habilidades"
import Proyectos from "./Proyectos"
import styleMain from '../../styles/Contenido/Main.module.css'


export default function Main() {

    return <main className={styleMain.container}>
        <Perfil />
        <Habilidades />
        <Proyectos />
    </main>
}