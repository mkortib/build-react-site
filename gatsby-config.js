module.exports = {
  siteMetadata: {
    title: `Code+Design Site`,
    description: `Complete courses about the best tools and design systems. Prototype and build apps woth React and Swift.`,
    keywords: `react course, react for designers, ios development, sketch app, arkit 2`,
    author: `TiraMax`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-react.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '1a0rbm0x8a2j',
        accessToken: '3a987c8be8214c284d4c45c33e0f3bbdc1e256a7e732efd30325b72fb6aaad49'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
