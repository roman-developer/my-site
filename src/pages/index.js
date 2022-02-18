import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>

    <div class="container index-container">
      <div class="col-1" style={{alignSelf: "center"}}>
        <h1>
          Hola!<br/>
          Soy Jose,<br />
          Ingeniero Software
        </h1>
      </div>
      <div class="col-2" style={{alignSelf: "center"}}>
        <StaticImage
          src="../images/profile-image.jpeg"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="My photo"
          className="profile-image"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
    <div class="view-more-btn">
      <Link to="/about/">Saber más</Link><br />
    </div>
  </Layout>
)

export default IndexPage
