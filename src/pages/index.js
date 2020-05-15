import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import { Post } from '../components/post';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100vh;
`;

const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
`;

const AboutColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
  h1 {
    display: inline-block;
    border-bottom: 1px solid;
  }
`;

const PostsColumn = styled(Column)`
  flex-grow: 5;
  flex-basis: 200px;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
  }
`;

const PostsTitle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
`;

const PostsCount = styled.span`
  font-size: 22px;
`;

const Main = ({ data }) => (
  <PageWrapper>
    <SEO title="Phil Barber" description="Homepage" />
    <Container>
      <AboutColumn>
        <h1>Look! It&apos;s a website all about me</h1>
        <p>
          Impressive and confusing that you&apos;ve ended up here. Not much to
          see yet.
        </p>
        <p>
          This is a work in progess site, beginning as a 100 days of{' '}
          <a href="https://www.gatsbyjs.org/blog/tags/100-days-of-gatsby/">
            Gatsby
          </a>{' '}
          project. You can find recent books and films I&apos;ve been enjoying,
          perhaps more in the future.
        </p>
        <p>
          I use vim and don&apos;t have a spell checker. Couple that with my
          horrendous spelling and you&apos;ll be sure to find a few (many)
          spelling errors. Feel free to open a{' '}
          <a href="https://github.com/Phil-Barber/phil-barber/">PR</a>!
        </p>
        <p>
          I won&apos;t be offended that you&apos;ve already noticed that
          I&apos;m definitely <strong>not</strong> a designer. I did my best
          with the colours OK, I&apos;d appreciate it if we could just leave it
          at that.
        </p>
        <p>
          Full disclosure: this is a work in progress and you shouldn&apos;t
          expect most (if any) of these links to actualy work.
        </p>
        <p>Thanks for stopping by!</p>
      </AboutColumn>
      <PostsColumn>
        <PostsTitle>
          <h1>Posts</h1>
          <PostsCount>Total: {data.allMarkdownRemark.totalCount}</PostsCount>
        </PostsTitle>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post key={node.id} {...node} />
        ))}
      </PostsColumn>
    </Container>
  </PageWrapper>
);

export default Main;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___dateCompleted], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            dateCompleted
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
