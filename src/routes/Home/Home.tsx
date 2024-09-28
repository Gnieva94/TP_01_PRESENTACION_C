import soyProgramador from '../../assets/soyprogramador.gif'
import './Home.css'

export const Home = () => {
  return (
    <section>
      <h1>Hola!<br />Soy Nieva Gustavo</h1>
      <img src={soyProgramador} className="logo" alt="Soy Programador" />
      <p>
      Soy un entusiasta de la programación y la domótica.<br />Mi formación me provee de un abanico de habilidades y manejo de tecnologías en nivel básico-intermedio, metiendo mi conocimiento en la programación de microcontroladores y aplicaciones.<br />Actualmente me encuentro realizando proyectos propios de domótica domestica. Mi meta principal en la carrera es poder trabajar desde cualquier parte del mundo.
      </p>
    </section>
  )
}
