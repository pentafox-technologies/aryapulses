/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env`
})

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `Arya Pulses`,
    titleDesc: `Premium Australian Pulses & Lentils for Global Palates`,
    description: `Arya Pulses was founded in 2016, a company solely dedicated to exporting pulses and lentils to Sri Lanka, from Australia.`,
    author: `@shidiq-pentafox`,
    siteUrl: `https://aryapulses.com.au/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_G_TRACKING_ID,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arya Pulses`,
        short_name: `Arya Pulses`,
        start_url: `/`,
        background_color: `#EEEED7`,
        theme_color: `#525B37`,
        display: `minimal-ui`,
        icon: `src/images/arya-pulses-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Libre Baskerville: 400,700`,
          `Inter: 200,300,400,500,600,700`,
          `Montserrat: 100, 200, 300, 400, 500`,
          `Baskervville: 400`
        ],
        display: "swap",
      },
    },
  ],
}
