import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="about">
        <h1>About Me</h1>
        <div className="container">
          <div className="about-img">
            <img
              id="picture"
              src="https://i.imgur.com/dv3vmZ1.jpg"
              alt="Douglas Kelley"
            />
            <p>
              A bagel fanatic, originally from Long Island, NY. Moved around and
              settled in upstate NY near Syracuse. Now I spend most of my days
              debugging code, chugging coffee, and complaining about bagels to
              my animals (between you and me, I think they stopped listening
              ages ago). Recently I graduated the Software Engineering Immersive
              course at General Assembly where we learned primarily the MERN
              stack. I enjoy working with React/Gatsby, Javascript, and
              debugging/tearing programs apart to figure out how they work.
              Thank you for visiting and I look forward to hearing from you!
            </p>
          </div>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <a
            href={`Resume.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About
