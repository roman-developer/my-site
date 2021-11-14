import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>
      Jose Mª Roman,<br/>
      Software Engineer and expert on Agile Management
    </h1>
    
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

    <h2>The website is under maintenance. Sorry for the inconvenience!</h2>

    <p>
      <Link to="/about/">About me</Link><br />
    </p>
  </Layout>
)

export default IndexPage
