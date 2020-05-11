import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { useHover } from '../hooks/useHover';

const PostContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxSmall};
  transition: background-color 1s ease-out;
  :hover {
    background-color: white;
  }
`;

const Excerpt = styled.p`
  visibility: hidden;
  max-height: 0px;
  overflow: hidden;

  ${({ isHovered }) =>
    isHovered &&
    `
    max-height: 100px;
    visibility: visible;
  `};

  transition: max-height 1s, visibility 1s;
`;

export const Post = ({ fields, frontmatter, excerpt }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <dev ref={hoverRef}>
      <PostContainer>
        <Link
          to={fields.slug}
          css={css`
            text-decoration: none;
            color: inherit;
          `}
        >
          <h3>
            {frontmatter.title}
            <span
              css={css`
                color: #667269;
              `}
            >
              — {frontmatter.dateCompleted}
            </span>
          </h3>
          <Excerpt isHovered={isHovered}>{excerpt}</Excerpt>
        </Link>
      </PostContainer>
    </dev>
  );
};
