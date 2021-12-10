import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Education = () => (
  <Layout>
    <Seo title="Education" />
    <h1>Formación</h1>

    <div className="education-card">
      <p>Project Management Institute (PMI)</p>
      <p>PMI Agile Certified Practitioner (PMI-ACP)</p>
      <p>2021</p>
    </div>

    <div className="education-card">
      <p>Universidad Católica de Ávila (UCAV)</p>
      <p>Grado en Ingeniería de Sistemas de Información</p>
      <p>2013 - 2014</p>
    </div>

    <div className="education-card">
      <p>Universitat Oberta de Catalunya (UOC)</p>
      <p>Ingeniería Técnica en Informática de Gestión</p>
      <p>2007 - 2011</p>
    </div>

    <div className="education-card">
      <p>I.E.S. Salmedina (Chipiona - Cádiz)</p>
      <p>Técnico Superior en Desarrollo de Aplicaciones Informáticas</p>
      <p>2007 - 2009</p>
    </div>

    <Link to="/">Ir al inicio</Link>
  </Layout>
)

export default Education