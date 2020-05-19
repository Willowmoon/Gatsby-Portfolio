import React from "react"
import styles from "../../css/single-project.module.css"
import Image from "gatsby-image"

const Project = ({ title, url, image, desc }) => {
  const mainImage = image.fluid
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} alt={title} className={styles.img} />
        <a
          href={url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
          <h3>{title}</h3><br />
          <p>{desc}</p>
    </article>
  )
}

export default Project
