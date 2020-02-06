module.exports = {
  siteMetadata: {
    title: 'Phil Barber',
    description: 'A blog about me and maybe other things',
    author: 'phil.barber93@gmail.com'
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
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
        icon: 'src/images/icon.jpeg'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet'
  ]
}
