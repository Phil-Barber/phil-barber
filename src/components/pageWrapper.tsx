import * as React from 'react';
import { useState, useRef } from 'react';
import {
  useSpring,
  useTransition,
  useChain,
  animated,
  config,
} from 'react-spring';
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

const Arrow = styled(animated.span)`
  font-size: 30px;
  font-weight: 600;
  margin-right: ${({ theme }) => theme.spacing.xLarge};
  cursor: pointer;
  user-select: none;
`;

const Body = styled.div`
  display: flex;
`;

const Sidebar = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};

  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow: scroll;
  box-shadow: -2px 0 8px 0 rgba(0, 0, 0, 0.24);
  padding-top: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

const NavLink = styled(animated(StyledLink))`
  width: 80px;
  font-size: 18px;
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
  width: 100vw;

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

interface Props {
  className?: string;
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ className, children }: Props) => {
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

  const sidebarRef = useRef();
  const sidebarAnimation = useSpring({
    width: isSidebarOpen ? '300px' : '0px',
    config: config.stiff,
    ref: sidebarRef,
  });

  const listItems = [
    {
      children: 'Now',
      key: 'now',
      to: '/now',
    },
    {
      children: 'Contact',
      key: 'contact',
      to: '/contact/',
    },
  ];
  const transitionRef = useRef();
  const transitions = useTransition(
    isSidebarOpen ? listItems : [],
    (item) => item.key,
    {
      ref: transitionRef,
      unique: true,
      trail: 400 / listItems.length,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: {
        opacity: 0,
        transform: 'scale(0)',
        maxWidth: 0,
        padding: 0,
        margin: 0,
      },
    }
  );

  useChain(
    isSidebarOpen ? [sidebarRef, transitionRef] : [transitionRef, sidebarRef],
    isSidebarOpen ? [0, 0.3] : [0, 0.8]
  );

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
        <Sidebar style={sidebarAnimation}>
          {transitions.map(({ item, key, props }) => (
            <NavLink key={key} {...item} style={props}>
              {item.children}
            </NavLink>
          ))}
          <img
            src="https://api.thegreenwebfoundation.org/greencheckimage/phil-barber.uk"
            alt="This website is hosted Green - checked by thegreenwebfoundation.org"
          />
        </Sidebar>
      </Body>
    </>
  );
};

export default PageWrapper;

export const FullWidthWrapper = styled(PageWrapper)`
  ${ContentContainer} {
    width: 100%;
    min-height: 100vh;
  }
`;
