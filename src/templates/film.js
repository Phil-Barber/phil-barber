import React from 'react';
import { graphql } from 'gatsby';
import { Review } from './review';

export const FilmTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const { released, dateCompleted, director, starring } = post.frontmatter;
  const details = [
    {
      attr: 'Released',
      value: released,
    },
    {
      attr: 'Watched',
      value: dateCompleted,
    },
    {
      attr: 'Director',
      value: director.join(', '),
    },
    {
      attr: 'Starring',
      value: starring.join(', '),
    },
  ];

  return (
    <Review
      imageFluid={featuredImgFluid}
      details={details}
      extraDetail={
        <>
          See all my film ratings on{' '}
          <a
            href="https://www.imdb.com/user/ur46443696/ratings?ref_=nv_usr_rt_4"
            target="_blank"
            rel="noopener noreferrer"
          >
            IMDB
          </a>
          .
        </>
      }
      title={post.frontmatter.title}
      description={post.frontmatter.excerpt}
    >
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Review>
  );
};

export default FilmTemplate;

export const query = graphql`
  query FilmQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        released
        dateCompleted
        director
        starring
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
