import React, { useState } from 'react';
import { useSpring, a, config } from 'react-spring';
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

const Arrow = styled(a.span)`
  font-size: 30px;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.xLarge};
  cursor: pointer;
  user-select: none;
`;

const Body = styled.div`
  display: flex;
`;

const Sidebar = styled(a.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: scroll;
  box-shadow: -2px 0 8px 0 rgba(0, 0, 0, 0.24);
  ${({ isOpen }) => isOpen && `padding: 0 18px;`}
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

export const ContentContainer = styled.div`
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

const PageWrapper = ({ className, children }) => {
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

  const arrowRotation = useSpring({
    transform: `rotate(${isSidebarOpen ? 90 : 0}deg)`,
    config: config.stiff,
  });

  const sidebarAnimation = useSpring({
    width: isSidebarOpen ? '300px' : '0px',
    config: config.stiff,
  });

  return (
    <>
      <Headroom>
        <MainHeader>
          <StyledLink to={'/'}>
            <h1>{data.site.siteMetadata.title}</h1>
          </StyledLink>
          <Arrow style={arrowRotation} onClick={toggleSidebar}>
            &gt;
          </Arrow>
        </MainHeader>
      </Headroom>
      <Body className={className}>
        <ContentContainer>{children}</ContentContainer>
        <Sidebar style={sidebarAnimation} isOpen={isSidebarOpen}>
          <NavLink to={'/contact/'}>Contact</NavLink>
        </Sidebar>
      </Body>
    </>
  );
};

export default PageWrapper;
