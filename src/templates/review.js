import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 100vh;
`;

const Column = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  padding-top: ${({ theme }) => theme.spacing.large};
`;

const ContentColumn = styled(Column)`
  flex-grow: 6;
  flex-basis: 300px;
  margin-right: ${({ theme }) => theme.spacing.xxxLarge};
`;

const InfoColumn = styled(Column)`
  margin-top: ${({ theme }) => theme.spacing.large};
  flex-grow: 5;
  flex-basis: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const Poster = styled(Img)`
  flex-basis: 200px;
  flex-grow: 1;
`;

const DetailsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.normal};
  flex-grow: 1;
  flex-basis: 100px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Detail = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xSmall};
  text-align: left;

  strong {
    display: block;
    font-weight: 600;
  }
`;

const Details = ({ details }) => (
  <DetailsContainer>
    {details.map(({ attr, value }) => (
      <Detail key={attr}>
        <strong>{attr}:</strong> {value}
      </Detail>
    ))}
  </DetailsContainer>
);

export const Review = ({
  imageFluid,
  details,
  title,
  description,
  children,
}) => {
  return (
    <PageWrapper>
      <SEO title={title} description={description} />
      <Container>
        <InfoColumn>
          <Poster fluid={imageFluid} imgStyle={{ objectFit: 'contain' }} />
          <Details details={details} />
        </InfoColumn>
        <ContentColumn>
          <div>
            <h1>{title}</h1>
            {children}
          </div>
        </ContentColumn>
      </Container>
    </PageWrapper>
  );
};
