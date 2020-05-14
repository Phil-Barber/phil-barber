import styled from 'styled-components';
import Img from 'gatsby-image';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100vh;
`;

export const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  padding-top: ${({ theme }) => theme.spacing.large};
`;

export const ContentColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
  margin-right: ${({ theme }) => theme.spacing.xxxLarge};
`;

export const InfoColumn = styled(Column)`
  margin-top: ${({ theme }) => theme.spacing.large};
  flex-grow: 5;
  flex-basis: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Poster = styled(Img)`
  flex-basis: 200px;
  flex-grow: 1;
`;

export const DetailsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  flex-grow: 1;
  flex-basis: 100px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Detail = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
  text-align: left;

  strong {
    display: block;
    font-weight: 600;
  }
`;
