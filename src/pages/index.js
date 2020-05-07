import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
`;

const AboutColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
`;

const PostsColumn = styled(Column)`
  flex-grow: 5;
  flex-basis: 200px;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
  }
`;

const Main = ({ data }) => (
  <PageWrapper>
    <SEO title="Phil Barber" description="Homepage" />
    <Container>
      <AboutColumn>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Look! It&apos;s a website all about me
        </h1>
        <p>
          Impressive and consuing that you&apos;ve ended up here. Not much to
          see yet. Have a good time, make good choices.
        </p>
        <p>
          Full disclosure: this is a work in progress and you shouldn&apos;t
          expect most (if any) of these links to actualy work.
        </p>
        <p>Thanks for stopping by!</p>
      </AboutColumn>
      <PostsColumn>
        <h1>Posts</h1>
        <div>{data.allMarkdownRemark.totalCount} Posts</div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>
                {node.frontmatter.title}{' '}
                <span
                  css={css`
                    color: #667269;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </PostsColumn>
    </Container>
  </PageWrapper>
);

export default Main;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
