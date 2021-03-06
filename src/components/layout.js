/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";
import { SiGatsby } from "react-icons/si";
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Creado por Jose Maria Roman. Desarrollado en <a href='https://www.gatsbyjs.com/' target="_blank" rel="noreferrer">GatsbyJS <SiGatsby /></a>
          <br/>
          {`  `}<a href='https://www.linkedin.com/in/josemariaroman/' target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a>
          {`  `}<a href='https://github.com/roman-developer' target="_blank" rel="noreferrer"><BsGithub /> Github</a>
          {`  `}<a href='https://jose-maria-roman.medium.com' target="_blank" rel="noreferrer"><BsMedium /> Medium</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
