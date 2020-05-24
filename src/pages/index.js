import React from 'react';
import styled, { css } from 'styled-components';
import { useTransition, config } from 'react-spring';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import { AnimatedPost } from '../components/post';
import { twoColumnMinWidth } from '../style';

const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
`;

const centerLayout = css`
  margin: auto;
  max-width: 640px;
`;

const PostsColumn = styled(Column)`
  flex-grow: 5;
  flex-basis: 200px;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 100vh;

  @media ${twoColumnMinWidth} {
    min-width: 100vw;
    flex-direction: column;
    height: unset;

    ${PostsColumn} {
      ${centerLayout}
      padding: 0;
    }
  }
`;

const AboutColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
  h1 {
    display: inline-block;
    border-bottom: 1px solid;
  }
`;

const AboutText = styled.div`
  ${centerLayout}
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

export const Main = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const transitions = useTransition(posts, ({ node }) => node.id, {
    unique: true,
    trail: 1000 / posts.length,
    from: { opacity: 0, transform: 'translate3d(0, 100px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    config: config.gentle,
  });

  return (
    <PageWrapper>
      <SEO title="Phil Barber" description="Homepage" />
      <Container>
        <AboutColumn>
          <AboutText>
            <h1>Look! It&apos;s a website all about me</h1>
            <p>
              Impressive and confusing that you&apos;ve ended up here. Not much
              to see yet.
            </p>
            <p>
              This is a work in progess site, beginning as a 100 days of{' '}
              <a href="https://www.gatsbyjs.org/blog/tags/100-days-of-gatsby/">
                Gatsby
              </a>{' '}
              project. You can find recent books and films I&apos;ve been
              enjoying, perhaps more in the future.
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
              with the colours OK, I&apos;d appreciate it if we could just leave
              it at that.
            </p>
            <p>
              Full disclosure: this is a work in progress and you shouldn&apos;t
              expect most (if any) of these links to actualy work.
            </p>
            <p>Thanks for stopping by!</p>
          </AboutText>
        </AboutColumn>
        <PostsColumn>
          <PostsTitle>
            <h1>Posts</h1>
            <PostsCount>Total: {data.allMarkdownRemark.totalCount}</PostsCount>
          </PostsTitle>
          {transitions.map(({ item, key, props }) => (
            <AnimatedPost key={key} {...item.node} style={props} />
          ))}
        </PostsColumn>
      </Container>
    </PageWrapper>
  );
};

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
