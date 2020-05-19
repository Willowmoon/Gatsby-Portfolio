import React from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>contact</h1>
      <div className="container">
        <Form />
      </div>
    </Layout>
  )
}

export default Contact
