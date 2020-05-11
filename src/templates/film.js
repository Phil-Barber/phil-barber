import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100vh;
`;

const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  padding-top: ${({ theme }) => theme.spacing.large};
`;

const ContentColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
  margin-right: ${({ theme }) => theme.spacing.xxxLarge};
`;

const InfoColumn = styled(Column)`
  margin-top: ${({ theme }) => theme.spacing.large};
  flex-grow: 5;
  flex-basis: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Poster = styled(Img)`
  flex-basis: 200px;
  flex-grow: 1;
`;

const Details = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  flex-grow: 1;
  flex-basis: 100px;
  color: ${({ theme }) => theme.colors.primary};

  span {
    strong {
      display: block;
      font-weight: 600;
    }
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.xSmall};
    text-align: left;
  }
`;

const FilmTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <PageWrapper>
      <Container>
        <InfoColumn>
          <Poster
            fluid={featuredImgFluid}
            imgStyle={{ objectFit: 'contain' }}
          />
          <Details>
            <span>
              <strong>Released:</strong> {post.frontmatter.released}
            </span>
            <span>
              <strong>Watched:</strong> {post.frontmatter.dateCompleted}
            </span>
            <span>
              <strong>Director:</strong> {post.frontmatter.director.join(', ')}
            </span>
            <span>
              <strong>Starring:</strong> {post.frontmatter.starring.join(', ')}
            </span>
          </Details>
        </InfoColumn>
        <ContentColumn>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <div>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </ContentColumn>
      </Container>
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
        released
        dateCompleted
        director
        starring
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
