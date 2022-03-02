import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <h1>Proyectos</h1>

    <h2>Proyectos profesionales</h2>

    <div class="card">
      <p><a href="http://domestika.org/" target="_blank" rel="noreferrer">Domestika</a></p>
      <p>
        Domestika es una plataforma web donde se ofrece una amplia variedad de cursos para una gran comunidad de creativos. <br/>
        El proyecto está escrito mayoritariamente en Ruby on Rails y Javascript.
      </p>
    </div>

    <div class="card">
      <p><a href="https://home.kpmg/" target="_blank" rel="noreferrer">KPMG - Innovation Factory</a></p>
      <p>
        Este proyecto estaba basado en la gestión de ideas de innovación para afrontar retos. Además, era totalmente personalizable para cada cliente, tanto en el contenido como en la apariencia de la plataforma.<br/>
        El proyecto estaba escrito mayoritariamente en Ruby on Rails y React JS.
      </p>
    </div>

    <div class="card">
      <p>Global Payroll</p>
      <p>
        Este producto propio de la empresa NGA-HR consiste en una interfaz web para múltiples sistemas HRIS y Payroll systems, usados para la gestión y el intercambio de datos relacionados con RRHH para varios países (gestión de procesos HR, herramientas de reportes, etc).<br/>
        El proyecto está escrito mayoritariamente en Ruby on Rails, Javascript. Para la comunicación con los sistemas SAP de HR se usaba un conector llamado WebMethods.
      </p>
    </div>

    <div class="card">
      <p><a href="https://www.personasque.es" target="_blank" rel="noreferrer">Personas Que</a></p>
      <p>
        Es una plataforma web, a modo de red social, en la que los usuarios son personas que padecen, cuidan o tienen relación con alguna enfermedad. Estos usuarios no sólo tienen la posibilidad de intercambiar sus experiencias en la plataforma con otros, sino que pueden obtener información de profesionales y llevar el control de su enfermedad.<br/>
        El proyecto está escrito mayoritariamente en Ruby on Rails y Javascript.
      </p>
    </div>

    <br/>
    
    <h2>Proyectos personales</h2>

    <div class="card">
      <p><a href="http://openaccess.uoc.edu/webapps/o2/handle/10609/8108?mode=full" target="_blank" rel="noreferrer">empleateNet</a></p>
      <p>
        Esta platafoma web, que consiste en un portal de búsqueda y oferta de empleo, fue presentada como Trabajo Fin de Carrea (TFC) en la Ingeniería Tec. de Informática de Gestión.<br/>
        El proyecto está basado en la tecnología J2EE (Java 2 Enterprise Edition) usando el framework STRUTS.
      </p>
    </div>

    <div class="card">
      <p>EMN - Event Management Network</p>
      <p>
        Esta aplicación web consiste en una plataforma de gestión de eventos de ocio de todo tipo, como pueden ser conciertos, fiestas, eventos deportivos, exposiciones culturales, etc. Fue presentada como Trabajo Fin de Grado (TFG) en el Grado de Ingeniería de Sistemas de Información.<br/>
        El proyecto está basado en Ruby On Rails.
      </p>
    </div>

    <div class="card">
      <p><a href="https://github.com/roman-developer/depot" target="_blank" rel="noreferrer">Depot Application</a></p>
      <p>
        Esta aplicación web consiste en una tienda virtual de libros. Fué desarrollado para probar las nuevas funcionalidades de Rails 6 siguendo el libro "Agile Web Development with Rails 6"<br/>
        El proyecto está basado en Ruby On Rails.
      </p>
    </div>

    <div class="card">
      <p><a href="https://github.com/roman-developer/my-site" target="_blank" rel="noreferrer">Mi página web</a></p>
      <p>
        Esta web fué desarrollada como portfolio de mi experiencia laboral y proyectos.<br/>
        El proyecto está basado en Gatsby JS.
      </p>
    </div>

    <div class="card">
      <p>Otros proyectos</p>
      <p>
      Puede visitar mi repositorio de Github donde hay otros proyectos en el siguiente enlace: <a href="https://github.com/roman-developer?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
      </p>
    </div>

    <div class="view-more-btn">
      <Link to="/">Ir al inicio</Link>
    </div>
  </Layout>
)

export default Projects