import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';

import { rhythm } from '../../utils/typography';

const Header = styled(Headroom)`
  .headroom {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <>
      <Header>
        <div>
          <Link to={'/'}>
            <h3
              css={css`
                margin-bottom: ${rhythm(2)};
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
        </div>
        <div>
          <Link to={'/contact/'}>Contact</Link>
        </div>
      </Header>
      <div
        css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
