import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

export const Post = ({ fields, frontmatter, excerpt }) => (
  <div>
    <Link
      to={fields.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `}
    >
      <h3>
        {frontmatter.title}{' '}
        <span
          css={css`
            color: #667269;
          `}
        >
          — {frontmatter.date}
        </span>
      </h3>
      <p>{excerpt}</p>
    </Link>
  </div>
);
