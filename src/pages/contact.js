import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { ContactForm } from '../components/contactForm'

export default ({ data }) => (
  <Layout>
    <h1>Get In Touch!</h1>
    <p>
      If you've got a social enterprise or a good cause that you would like some technical help 
      with, don't hesitate to get in touch using the form below.
    </p>
    <ContactForm />
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
