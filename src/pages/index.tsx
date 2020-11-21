import React from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring, useTransition, config } from 'react-spring';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import { AnimatedPost } from '../components/post';
import { twoColumnMinWidth, glideIn } from '../style';
import {
  MarkdownRemark,
  MarkdownRemarkConnection,
} from '../types/graphql-types';

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

const AboutText = styled(animated.div)`
  ${centerLayout}
`;

const PostsTitle = styled(animated.div)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
`;

const PostsCount = styled.span`
  font-size: 22px;
`;

interface Props {
  readonly data: {
    readonly markdownRemark: MarkdownRemark;
    readonly allMarkdownRemark: MarkdownRemarkConnection;
  };
}

export const Main: React.FC<Props> = ({ data }: Props) => {
  const aboutContent = data.markdownRemark;
  const posts = data.allMarkdownRemark.edges;

  const entranceAnimation = useSpring(glideIn);
  const transitions = useTransition(posts, ({ node }) => node.id, {
    unique: true,
    trail: 500 / posts.length,
    ...glideIn,
    enter: glideIn.to,
    config: config.stiff,
  });

  return (
    <PageWrapper>
      <SEO title="Phil Barber" description="Homepage" />
      <Container>
        <AboutColumn>
          <AboutText
            style={entranceAnimation}
            dangerouslySetInnerHTML={{ __html: aboutContent.html }}
          />
        </AboutColumn>
        <PostsColumn>
          <PostsTitle style={entranceAnimation}>
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
    markdownRemark(fields: { slug: { eq: "/markdown/about/" } }) {
      html
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___dateCompleted], order: DESC }
      filter: { fields: { slug: { regex: "/(film)|(book)|(blog)/" } } }
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
