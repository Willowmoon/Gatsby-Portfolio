import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "../../css/projects.module.css"
import Project from "./Project"

const query = graphql`
  {
    allProjects: allContentfulProject(sort: { fields: slug, order: DESC }) {
      nodes {
        title
        url
        contentful_id
        slug
        desc
        image {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        id
      }
    }
  }
`
const Projects = () => {
  const {
    allProjects: { nodes: projects },
  } = useStaticQuery(query)
  return (
    <section className={styles.projects}>
      <div className={styles.center}>
        {projects.map((item) => {
          return <Project key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default Projects
