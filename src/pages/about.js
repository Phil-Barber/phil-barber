import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Nothin' but filler.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
