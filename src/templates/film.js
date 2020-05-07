import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageWrapper from '../components/pageWrapper';
import { PageLayout } from '../components/styled';
import SEO from '../components/seo';

const FilmTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <PageWrapper>
      <PageLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <Img fluid={featuredImgFluid} />
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default FilmTemplate;

export const query = graphql`
  query FilmQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
