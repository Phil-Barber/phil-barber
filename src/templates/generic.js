import React from 'react';
import styled from 'styled-components';
import PageWrapper, { ContentContainer } from '../components/pageWrapper';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const Wrapper = styled(PageWrapper)`
  ${ContentContainer} {
    width: 100%;
    height: 100vh;
  }
`;

const Container = styled.div`
  max-width: 700px;
  text-align: justify;
  margin: 0 auto;
`;

export const Generic = ({ data }) => (
  <Wrapper>
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.export}
    />
    <Container>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Container>
  </Wrapper>
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
