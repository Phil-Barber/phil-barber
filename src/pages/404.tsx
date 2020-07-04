import * as React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/pageWrapper';
import { PageLayout } from '../components/styled';

const Content = styled.div`
  font-size: 40px;
  font-weight: 600;
  min-height: 100vh;
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

export const FourOhFour: React.FC<null> = () => (
  <PageWrapper>
    <PageLayout>
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
    </PageLayout>
  </PageWrapper>
);

export default FourOhFour;
