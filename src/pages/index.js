import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>
      Hola!<br/>
      Soy Jose,<br />
      Ingeniero Software
    </h1>
    
    <StaticImage
      src="../images/profile-image.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="My photo"
      className="profile-image"
      style={{ marginBottom: `1.45rem` }}
    />

    <h2>The website is under maintenance. Sorry for the inconvenience!</h2>

    <p>
      <Link to="/about/">Saber más</Link><br />
    </p>
  </Layout>
)

export default IndexPage
