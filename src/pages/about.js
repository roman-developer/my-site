import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout>
    <Seo title="About" />
    <h1>About me</h1>
    
    <p>
      Currently, I am remotely working as Software Engineer at Domestika. I am part of the area of Growth and eCommerce.
    </p>
    <p>
      Also, I was working as a Lead Developer at Bi4Group (Granada). I was in charge of some development tasks (programming, TDD, and code reviews) and management (applying agile methodologies such as Scrum or Kanban, customer support, and helping or coaching the team members).
    </p>
    <p>
      Previously, I worked for two years as a web application developer in the company NGA-HR, based on the HR sector, where I participated in a project to exchange information between different payroll systems. In addition, I worked, almost 2 years, for Razorfish Healthware, a company belonging to the Publicis Group, in the PeopleWho project.
    </p>
    <p></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About