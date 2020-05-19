import React from "react"

const Footer = () => {
  return (
    <footer>
      <div style={{ fontSize: "10px" }}>
        Copyright &copy; Douglas Kelley {new Date().getFullYear()}&nbsp; //
        Background Photo by
        <a href="https://unsplash.com/@miteneva"> Maria Teneva on Unsplash</a>
      </div>
    </footer>
  )
}

export default Footer
