import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';

import { rhythm } from '../../utils/typography';

const MainHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xxSmall} ${theme.spacing.normal}`};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0;
  }
`;

const SecondaryHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.tertiary};
  padding: ${({ theme }) => `
    ${theme.spacing.xxSmall} 
    ${theme.spacing.large}
    ${theme.spacing.xxxSmall}
  `};
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavLink = styled(StyledLink)`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding-top: ${({ theme }) => theme.spacing.large};
  text-align: justify;
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
      <Headroom>
        <MainHeader>
          <StyledLink to={'/'}>
            <h1
              css={css`
                margin-bottom: ${rhythm(2)};
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h1>
          </StyledLink>
        </MainHeader>
        <SecondaryHeader>
          <NavLink to={'/contact/'}>
            <div>Contact</div>
          </NavLink>
        </SecondaryHeader>
      </Headroom>
      <ContentContainer>
        <Content>{children}</Content>
      </ContentContainer>
    </>
  );
};

export default Layout;
