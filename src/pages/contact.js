import React from 'react';
import PageWrapper from '../components/pageWrapper';
import { PageLayout } from '../components/styled';
import { ContactForm } from '../components/contactForm';
import SEO from '../components/seo';

export const Contact = () => (
  <PageWrapper>
    <PageLayout>
      <SEO title="contact" description="Get in contact with me" />
      <h1>Get In Touch!</h1>
      <p>
        If you&apos;ve got a social enterprise or a good cause that you would
        like some technical help with, don&apos;t hesitate to get in touch using
        the form below.
      </p>
      <ContactForm />
    </PageLayout>
  </PageWrapper>
);

export default Contact;
