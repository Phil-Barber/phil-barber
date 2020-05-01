import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Main = ({ data }) => (
  <Layout>
    <SEO title="Phil Barber" description="Homepage" />
    <div>
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Look! It&apos;s a website all about me
      </h1>
      <p>
        Impressive and consuing that you&apos;ve ended up here. Not much to see
        yet. Have a good time, make good choices.
      </p>
      <p>
        Full disclosure: this is a work in progress and you shouldn&apos;t
        expect most (if any) of these links to actualy work.
      </p>
      <p>Thanks for stopping by!</p>
      <h2>Films</h2>
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
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
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
    </div>
  </Layout>
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
