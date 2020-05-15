module.exports = {
  siteMetadata: {
    title: 'Phil Barber',
    description: 'A blog about me and maybe other things',
    author: 'phil.barber93@gmail.com',
    siteUrl: 'https://phil-barber.uk/',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'standalone',
        icon: 'src/images/icon.jpeg',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        query: `
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                id
              }
            }
          }
        }
        `,
        mapping: {
          allMarkdownRemark: {
            sitemap: 'posts',
          },
        },
        createLinkInHead: true,
        addUncaughtPages: true,
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
