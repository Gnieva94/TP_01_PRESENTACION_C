import { Link } from 'react-router-dom'
import imgLocal from '../../assets/sbimg.jpg'
import './Projects.css'

export const Projects = () => {
  return (
    <section className='projects-section'>
      <h2>Clon página Starbucks Mobile<br />2023</h2>
      <p>La idea era poner a prueba los conocimientos en el primer curso de react que realicé.</p>
      <p>Realizado con React, Css y alojado en Firebase</p>
      <div>
        <img src={imgLocal} alt="Imagen del menú de la página de Starbucks Clon" />
        <button><Link to="https://starbucks-cloneishon.web.app/" target='_blank'>Visita la página</Link></button>
      </div>
    </section>
  )
}
