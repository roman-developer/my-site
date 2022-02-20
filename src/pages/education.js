import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Education = () => (
  <Layout>
    <Seo title="Education" />
    <h1>Formación</h1>

    <div class="card">
      <p>Project Management Institute (PMI)</p>
      <p>PMI Agile Certified Practitioner (PMI-ACP)</p>
      <p>2021</p>
    </div>

    <div class="card">
      <p>Universidad Católica de Ávila (UCAV)</p>
      <p>Grado en Ingeniería de Sistemas de Información</p>
      <p>2013 - 2014</p>
    </div>

    <div class="card">
      <p>Universitat Oberta de Catalunya (UOC)</p>
      <p>Ingeniería Técnica en Informática de Gestión</p>
      <p>2007 - 2011</p>
    </div>

    <div class="card">
      <p>I.E.S. Salmedina (Chipiona - Cádiz)</p>
      <p>Técnico Superior en Desarrollo de Aplicaciones Informáticas</p>
      <p>2007 - 2009</p>
    </div>

    <div class="view-more-btn">
      <Link to="/">Ir al inicio</Link>
    </div>
  </Layout>
)

export default Education