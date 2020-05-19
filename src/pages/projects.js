import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/Projects"

const projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1> Projects</h1>
      <Projects />
    </Layout>
  )
}

export default projects
