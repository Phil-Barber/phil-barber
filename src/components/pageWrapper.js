import React, { useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { useStaticQuery, Link, graphql } from 'gatsby';

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xxSmall} ${theme.spacing.normal}`};

  h1 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0;
  }
`;

const Arrow = styled.span`
  font-size: 30px;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.xLarge};
  cursor: pointer;
  user-select: none;

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    `
    transform: rotate(90deg);
  `};
`;

const Body = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  box-sizing: border-box;
  padding: 0 18px;
  overflow: scroll;
  box-shadow: -2px 0 8px 0 rgba(0, 0, 0, 0.24);
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Headroom>
        <MainHeader>
          <StyledLink to={'/'}>
            <h1>{data.site.siteMetadata.title}</h1>
          </StyledLink>
          <Arrow isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
            &gt;
          </Arrow>
        </MainHeader>
      </Headroom>
      <Body>
        <ContentContainer>{children}</ContentContainer>
        {isSidebarOpen && (
          <Sidebar>
            <NavLink to={'/contact/'}>Contact</NavLink>
          </Sidebar>
        )}
      </Body>
    </>
  );
};

export default PageWrapper;
