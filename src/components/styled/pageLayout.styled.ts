import styled from 'styled-components';

export const PageLayout = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding-top: ${({ theme }) => theme.spacing.large};
  min-height: 100vh;
`;
