import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { useTransition, config } from 'react-spring';
import { AnimatedPost } from './post';
import { PagedList } from './pagedList';
import { FilterList } from './filterList';
import { isFilmSlug, isBookSlug, isBlogSlug } from '../utils';
import { glideIn } from '../style';
import { MarkdownRemarkConnection } from '../types/graphql-types';

const PostsHeader = styled.div`
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
const FILMS = 'films';
const BOOKS = 'books';
const BLOGS = 'blogs';
type PostType = typeof FILMS | typeof BOOKS | typeof BLOGS;

interface Props {
  readonly data: {
    readonly allMarkdownRemark: MarkdownRemarkConnection;
  };
}

export const PurePostsList: React.FC<Props> = ({ data }: Props) => {
  const posts = data.allMarkdownRemark.edges;
  const postNodes = useTransition(posts, ({ node }) => node.id, {
    unique: true,
    trail: 500 / posts.length,
    ...glideIn,
    enter: glideIn.to,
    config: config.stiff,
  }).map(({ item, key, props }) => (
    <AnimatedPost key={key} {...item.node} style={props} />
  ));

  const lookupFunc = (item: { props: { fields: { slug: string } } }) => {
    console.log(item);
    return item.props.fields.slug;
  };

  const filters = {
    [BOOKS]: isBookSlug,
    [FILMS]: isFilmSlug,
    [BLOGS]: isBlogSlug,
  };

  return (
    <>
      <PostsHeader>
        <PostsTitle>
          <h1>Posts</h1>
          <PostsCount>Total: {postNodes.length}</PostsCount>
        </PostsTitle>
      </PostsHeader>
      <FilterList filters={filters} lookupFunc={lookupFunc} items={postNodes}>
        {(filteredItems) => <PagedList>{filteredItems}</PagedList>}
      </FilterList>
    </>
  );
};

export const PostsList: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___dateCompleted], order: DESC }
        filter: { fields: { slug: { regex: "/(film)|(book)|(blog)/" } } }
      ) {
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
  `);
  return <PurePostsList data={data} />;
};
