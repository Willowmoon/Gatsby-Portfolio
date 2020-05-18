module.exports = {
  siteMetadata: {
    title: `Douglas Kelley`,
    description: `Recent General Assembly Software Engineering Immersive course graduate. Mostly using React/Gatsby with a strong foundation in HTML/CSS/JS.`,
    author: `@douglasshmuglas`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
  ],
}
