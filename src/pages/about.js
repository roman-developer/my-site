import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>Sobre mí</h1>
    <p>
      { new Date().getFullYear() - new Date(2012,3,7).getFullYear() } años de experiencia en desarrollo web.
    </p>
    <p>
      { new Date(2020,12,31).getFullYear() - new Date(2016,4,1).getFullYear() } años de experiencia en dirección de equipos.
    </p>
    <StaticImage
      src="../images/about.jpg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="about"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      Actualmente me encuentro trabajando en remoto como Ingeniero Software en <a href="http://domestika.org/" target="_blank" rel="noreferrer">Domestika</a>. En el area de adquisición de usuarios y eCommerce de la plataforma.
    </p>
    <p>
      También he trabajado como Líder de equipo en <a href="https://nucleoo.com/" target="_blank" rel="noreferrer">Nucleoo</a> (Granada), realizando tareas de ingeniería (programación, TDD y revisiones de código) y de gestión (aplicando metodologías ágiles como Scrum o Kanban, soporte a cliente, y training a compañeros).
    </p>
    <p>
      Anteriormente trabajé, durante más de dos años, como Ingeniero Software (en desarrollo de aplicaciones web) para la compañía <a href="https://alight.com/ngahr" target="_blank" rel="noreferrer">NGA-HR (Alight)</a>, dedicada al sector de los RRHH donde participé de un proyecto propio de intercambio de información entre distintos sistemas de nóminas. Con mayor anterioridad trabajé también como programador web, durante casi 2 años, para Razorfish Healthware compañía perteneciente al Grupo Publicis, en el proyecto PersonasQue.
    </p>
    <Link to="/">Ir al inicio</Link>
  </Layout>
)

export default About