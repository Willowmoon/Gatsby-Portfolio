import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import socialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css"
import logo from "../images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNav = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink fade to="/">
          <img src={logo} width="30px" alt="Douglas Kelley" /></AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : ` ${styles.navLinks}`
          }
        >
          <li>
            <AniLink fade to="/about">
              about
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/projects">
              projects
            </AniLink>
          </li>
          <li>
            <AniLink fade to="/contact">
              contact
            </AniLink>
          </li>
        </ul>
        <div className={styles.navSocialLinks}>
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
