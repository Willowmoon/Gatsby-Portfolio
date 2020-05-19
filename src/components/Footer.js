import React from "react"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer>
      <div>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;{item.icon}
              &nbsp;
            </a>
          )
        })}
      </div>
      <div style={{ fontSize: "10px" }}>
        Copyright &copy; Douglas Kelley {new Date().getFullYear()}&nbsp; //
        Background Photo by
        <a href="https://unsplash.com/@miteneva"> Maria Teneva on Unsplash</a>
      </div>
    </footer>
  )
}

export default Footer
