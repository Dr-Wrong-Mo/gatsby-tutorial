module.exports = {
  siteMetadata: {
    title: `Gatsby Tutorial`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: `Gatsby Tutorial`,
    //     start_url: `/`,
    //     background_color: `#56179c`,
    //     theme_color: `#56179c`,
    //     display: `minimal-ui`,
    //     icon: `public/static/favicon-32x32.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/src/images/featured/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbs`,
        path: `${__dirname}/src/images/thumbs/`,
      },
    },
      'gatsby-transformer-remark'
  ],
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Tutorial project to learn Gatsby',
    copyright: 'This website is copyright 2022, Jon Wright',
    contact: 'fakeemail@test.com'
  }
};