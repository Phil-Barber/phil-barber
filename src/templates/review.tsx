import * as React from 'react';
import { useSpring, animated } from 'react-spring';
import PageWrapper from '../components/pageWrapper';
import SEO from '../components/seo';
import * as S from './review.styled';
import { glideIn } from '../style';
import { FluidObject } from 'gatsby-image';

interface Detail {
  readonly attr: string;
  readonly value: string;
}

type Details = ReadonlyArray<Detail>;

interface DetailsProps {
  readonly details: Details;
}

const Details: React.FC<DetailsProps> = ({ details }: DetailsProps) => (
  <S.DetailsContainer>
    {details.map(({ attr, value }) => (
      <S.Detail key={attr}>
        <S.Attr>{attr}:</S.Attr> {value}
      </S.Detail>
    ))}
  </S.DetailsContainer>
);

interface ReviewProps {
  readonly imageFluid: FluidObject;
  readonly details: Details;
  readonly title: string;
  readonly description: string;
  readonly children: React.ReactNode;
  readonly extraDetail?: React.ReactNode;
}

export const Review: React.FC<ReviewProps> = ({
  imageFluid,
  details,
  title,
  description,
  children,
  extraDetail,
}: ReviewProps) => {
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
            <Details details={details} />
          </S.InfoHeader>
          <S.ExtraInfo>{extraDetail}</S.ExtraInfo>
        </S.InfoColumn>
        <S.ContentColumn>
          <animated.div style={contentEntrance}>
            <h1>{title}</h1>
            {children}
          </animated.div>
        </S.ContentColumn>
      </S.Container>
    </PageWrapper>
  );
};
