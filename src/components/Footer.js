import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer>
      <div>
        {links.map((item, index) => {
          return (
            <AniLink fade key={index} to={item.path}>
              {item.text}
            </AniLink>
          )
        })}
      </div>
      <div>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div>copyright &copy; Douglas Kelley {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
