import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding-top: ${({ theme }) => theme.spacing.large};
`;

const Content = styled.div`
  font-size: 40px;
  font-weight: 600;
  height: 100vh;
`;

const HomeLink = styled.a`
  margin-top: ${({ theme }) => theme.spacing.large};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: normal;
`;

const Back = styled.span`
  padding-left: ${({ theme }) => theme.spacing.small};
  font-size: 25px;
`;

const FourOhFour = () => (
  <Layout>
    <Container>
      <Content>
        <div>¯\_(ツ)_/¯</div>
        <div>Nothing to see here folks!</div>
        <HomeLink href="/">
          Take me back
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Back role="img" aria-label="back">
            🔙
          </Back>
        </HomeLink>
      </Content>
    </Container>
  </Layout>
);

export default FourOhFour;
