import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Contact</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
