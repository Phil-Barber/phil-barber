import React from 'react';
import styled from 'styled-components';
import { FullWidthWrapper } from '../components/pageWrapper';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const Container = styled.div`
  max-width: 700px;
  text-align: justify;
  margin: 0 auto;
`;

export const Generic = ({ data }) => (
  <FullWidthWrapper>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.export}
    />
    <Container>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Container>
  </FullWidthWrapper>
);

export default Generic;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
