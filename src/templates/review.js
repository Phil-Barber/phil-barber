import React from 'react';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import * as S from './review.styled';

const Details = ({ details }) => (
  <S.DetailsContainer>
    {details.map(({ attr, value }) => (
      <S.Detail key={attr}>
        <S.Attr>{attr}:</S.Attr> {value}
      </S.Detail>
    ))}
  </S.DetailsContainer>
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
      <S.Container>
        <S.InfoColumn>
          <S.Poster fluid={imageFluid} imgStyle={{ objectFit: 'contain' }} />
          <Details key="details" details={details} />
        </S.InfoColumn>
        <S.ContentColumn>
          <div>
            <h1>{title}</h1>
            {children}
          </div>
        </S.ContentColumn>
      </S.Container>
    </PageWrapper>
  );
};
