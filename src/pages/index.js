import React from "react"
import SEO from "../components/seo"
import logo from "../images/logo.png"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <main>
      <img className="first" src={logo} width="35%" alt="Douglas Kelley" />
      <h1>douglas kelley</h1>
      
      <div className="center"><p>-  web developer  -</p><br />
        <AniLink fade to="/about">
          <button className="btn">about</button>
        </AniLink>
        <AniLink fade to="/projects">
          <button className="btn">projects</button>
        </AniLink>
        <AniLink fade to="/contact">
          <button className="btn">contact</button>
        </AniLink>
      </div>
    </main>
  </div>
)

export default IndexPage
