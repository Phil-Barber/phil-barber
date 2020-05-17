import React from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { useStaticQuery, Link, graphql } from 'gatsby';

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
  align-items: center;
  height: 36px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavLink = styled(StyledLink)`
  width: 80px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.primary};
  transition: font-size 0.5s ease, font-weight 0.5s ease;

  :hover {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.normal};
  text-align: justify;
  height: 100vh;

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PageWrapper = ({ children }) => {
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
            <h1>{data.site.siteMetadata.title}</h1>
          </StyledLink>
        </MainHeader>
        <SecondaryHeader>
          <NavLink to={'/contact/'}>Contact</NavLink>
        </SecondaryHeader>
      </Headroom>
      <ContentContainer>{children}</ContentContainer>
    </>
  );
};

export default PageWrapper;
