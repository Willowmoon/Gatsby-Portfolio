import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <nav>
      <div>
        <div>
          <AniLink fade to="/">
            <img src={logo} width="30px" alt="Douglas Kelley" />
          </AniLink>
          <button type="button" onClick={toggleNav}>
            <FaAlignRight />
          </button>
        </div>
        <ul style={isOpen ? { height: "216px" } : { height: "0px" }}>
          {links.map((item, index) => {
            return (
              <li key={index}>
                <AniLink fade to={item.path}>
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
        <div>
          {socialIcons.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                terget="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
