import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { useHover } from '../hooks/useHover';

const PostContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxSmall};
  padding-bottom: 0;
  transition: background-color 1s ease-out;
  text-align: left;
  :hover {
    background-color: white;
  }
`;

const Excerpt = styled.p`
  visibility: hidden;
  max-height: 0px;
  overflow: hidden;
  transition: max-height 1s, visibility 1s;
  position: relative;

  ${({ isHovered }) =>
    isHovered &&
    `
    max-height: 100px;
    visibility: visible;
  `};

  :after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      transparent 40px,
      ${({ theme }) => theme.colors.white}
    );
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Date = styled.span`
  color: #667269;
`;

export const Post = ({ fields, frontmatter, excerpt }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div ref={hoverRef}>
      <PostContainer>
        <StyledLink to={fields.slug}>
          <h3>
            {frontmatter.title}
            <Date> — {frontmatter.dateCompleted}</Date>
          </h3>
          <Excerpt isHovered={isHovered}>{excerpt}</Excerpt>
        </StyledLink>
      </PostContainer>
    </div>
  );
};
