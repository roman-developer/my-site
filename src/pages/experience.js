import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Experience = () => (
  <Layout>
    <Seo title="Experience" />
    <h1>Experiencia</h1>

    <div class="card">
      <div class="card-container">
        <div class="card-col-1">
          <StaticImage
            src="../images/companies/dmstk.jpeg"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="about"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="card-col-2">
          <p>Domestika · Remoto</p>
          <p>Ingeniero Software · {new Date(2021,1,7).toLocaleDateString('es')} - {new Date().toLocaleDateString('es')}</p>
          <p>Programador senior de RubyOnRails en el equipo de crecimiento y ecommerce de la plataforma (Growth).</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-container">
        <div class="card-col-1">
          <StaticImage
            src="../images/companies/nucleoo.jpeg"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="about"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="card-col-2">
          <p>Nucleoo · Granada</p>
          <p>Líder de equipo · {new Date(2017,10,1).toLocaleDateString('es')} - {new Date(2021,1,6).toLocaleDateString('es')}</p>
          <p>
            Líder técnico y rol de Scrum Master para el equipo de desarrollo del cliente KPMG.<br/>
            Tareas principales:<br/>
            - Actuar como facilitador entre cliente y equipo de desarrollo, eliminando impedimentos y siendo un lider servicial.<br/>
            - Guiar al equipo y cliente en el correcto funcionamiento de metodologías agiles (especialmente SCRUM).<br/>
            - Ejercer como primer punto de contacto entre equipo de soporte (Helpdesk) y el equipo de desarrollo.<br/>
            - Apoyar al equipo y cliente en el conocimiento técnico (como Igeniero Software) y funcional.<br/>
          </p>
          
          <p>Ingeniero Software (fullstack) · {new Date(2016,4,4).toLocaleDateString('es')} - {new Date(2021,1,6).toLocaleDateString('es')}</p>
          <p>Desarrollo de aplicaciones web en Ruby on Rails (back-end) y ReactJS (front-end).</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-container">
        <div class="card-col-1">
          <StaticImage
            src="../images/companies/nga_alight.jpeg"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="about"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="card-col-2">
          <p>NGA-HR (Alight) · Granada</p>
          <p>Ingeniero Software · {new Date(2014,1,7).toLocaleDateString('es')} - {new Date(2016,4,1).toLocaleDateString('es')}</p>
          <p>Programador Senior en Ruby on Rails.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-container">
        <div class="card-col-1">
          <StaticImage
            src="../images/companies/razorfish.jpeg"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="about"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="card-col-2">
          <p>Razorfish Healthware · Granada</p>
          <p>Ingeniero Software Jr · {new Date(2012,3,7).toLocaleDateString('es')} - {new Date(2014,1,6).toLocaleDateString('es')}</p>
          <p>Programador Junior en Ruby on Rails.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-container">
        <div class="card-col-1">
          <StaticImage
            src="../images/companies/estimulo_creativo.png"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="about"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div class="card-col-2">
          <p>Estímulo Creativo · Jerez de la Fra.</p>
          <p>Desarrollador web en prácticas · {new Date(2009,4,1).toLocaleDateString('es')} - {new Date(2009,6,31).toLocaleDateString('es')}</p>
          <p>Desarrollo web HTML, CSS y PHP</p>
        </div>
      </div>
    </div>

    <div class="view-more-btn">
      <Link to="/">Ir al inicio</Link>
    </div>
  </Layout>
)

export default Experience