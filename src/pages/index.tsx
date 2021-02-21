import React from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import { PostsList } from '../components/postsList';
import { twoColumnMinWidth, glideIn } from '../style';
import { MarkdownRemark } from '../types/graphql-types';

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

const Container = styled(animated.div)`
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

const AboutText = styled.div`
  ${centerLayout}
`;

interface Props {
  readonly data: {
    readonly markdownRemark: MarkdownRemark;
  };
}

export const Main: React.FC<Props> = ({ data }: Props) => {
  const aboutContent = data.markdownRemark;
  const entranceAnimation = useSpring(glideIn);
  return (
    <PageWrapper>
      <SEO title="Phil Barber" description="Homepage" />
      <Container style={entranceAnimation}>
        <AboutColumn>
          <AboutText dangerouslySetInnerHTML={{ __html: aboutContent.html }} />
        </AboutColumn>
        <PostsColumn>
          <PostsList />
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
  }
`;
