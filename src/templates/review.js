import React from 'react';
import { useSpring, a } from 'react-spring';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import * as S from './review.styled';
import { glideIn } from '../style';

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
  extraDetail,
}) => {
  const infoEntrance = useSpring({
    from: { opacity: 0, transform: 'translate3d(-200px, 0, 0)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0, 0)' },
  });
  const contentEntrance = useSpring(glideIn);
  return (
    <PageWrapper>
      <SEO title={title} description={description} />
      <S.Container>
        <S.InfoColumn style={infoEntrance}>
          <S.InfoHeader>
            <S.Poster fluid={imageFluid} imgStyle={{ objectFit: 'contain' }} />
            <Details key="details" details={details} />
          </S.InfoHeader>
          <S.ExtraInfo>{extraDetail}</S.ExtraInfo>
        </S.InfoColumn>
        <S.ContentColumn>
          <a.div style={contentEntrance}>
            <h1>{title}</h1>
            {children}
          </a.div>
        </S.ContentColumn>
      </S.Container>
    </PageWrapper>
  );
};
