import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import { ContactForm } from '../components/contactForm';
import SEO from '../components/seo';

const Contact = ({ data }) => (
  <PageWrapper>
    <SEO title="contact" description="Get in contact with me" />
    <h1>Get In Touch!</h1>
    <p>
      If you&apos;ve got a social enterprise or a good cause that you would like
      some technical help with, don&apos;t hesitate to get in touch using the
      form below.
    </p>
    <ContactForm />
  </PageWrapper>
);

export default Contact;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
