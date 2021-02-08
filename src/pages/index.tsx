import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { animated, useSpring, useTransition, config } from 'react-spring';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import { AnimatedPost } from '../components/post';
import { Badge } from '../components/badge';
import { twoColumnMinWidth, glideIn } from '../style';
import {
  MarkdownRemark,
  MarkdownRemarkConnection,
} from '../types/graphql-types';
import { isFilmSlug, isBookSlug, isBlogSlug } from '../utils';

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

const PostsHeader = styled(animated.div)`
  margin-bottom: ${({ theme }) => theme.spacing.normal};
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

const PageButtons = styled.button`
  margin: 0px ${({ theme }) => theme.spacing.xxSmall};
`;

interface Props {
  readonly data: {
    readonly markdownRemark: MarkdownRemark;
    readonly allMarkdownRemark: MarkdownRemarkConnection;
  };
}

const FILMS = 'films';
const BOOKS = 'books';
const BLOGS = 'blogs';
type PostType = typeof FILMS | typeof BOOKS | typeof BLOGS;

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

  const [selected, setSelected] = useState<Array<PostType>>([]);
  const toggleSelected = (clicked: PostType) => () => {
    setSelected((selected) =>
      selected.includes(clicked)
        ? selected.filter((item) => item !== clicked)
        : [...selected, clicked]
    );
  };

  const postNodes = transitions
    .filter(
      ({
        item: {
          node: {
            fields: { slug },
          },
        },
      }) => {
        if (!selected.length) return true;

        const filters = {
          [BOOKS]: isBookSlug,
          [FILMS]: isFilmSlug,
          [BLOGS]: isBlogSlug,
        };

        return selected.reduce(
          (acc, item) => acc || filters[item](slug),
          false
        );
      }
    )
    .map(({ item, key, props }) => (
      <AnimatedPost key={key} {...item.node} style={props} />
    ));

  const pageSize = 10;
  const numPages = Math.ceil(postNodes.length / pageSize);

  const [pageNum, setPageNum] = useState<number>(0);

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
          <PostsHeader style={entranceAnimation}>
            <PostsTitle>
              <h1>Posts</h1>
              <PostsCount>
                Total: {data.allMarkdownRemark.totalCount}
              </PostsCount>
            </PostsTitle>
            <Badge
              onClick={toggleSelected(FILMS)}
              isSelected={selected.includes(FILMS)}
            >
              Films
            </Badge>
            <Badge
              onClick={toggleSelected(BOOKS)}
              isSelected={selected.includes(BOOKS)}
            >
              Books
            </Badge>
            <Badge
              onClick={toggleSelected(BLOGS)}
              isSelected={selected.includes(BLOGS)}
            >
              Blogs
            </Badge>
          </PostsHeader>
          {postNodes.splice(pageSize * pageNum, pageSize)}

          <PageButtons
            disabled={pageNum === 0}
            onClick={() => setPageNum((num) => num - 1)}
          >
            Previous
          </PageButtons>
          {Array.from({ length: numPages }, (_, n) => (
            <PageButtons
              disabled={pageNum === n}
              key={n}
              onClick={() => setPageNum(n)}
            >
              {n + 1}
            </PageButtons>
          ))}
          <PageButtons
            disabled={pageNum === numPages - 1}
            onClick={() => setPageNum((num) => num + 1)}
          >
            Next
          </PageButtons>
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
