import * as React from 'react';
import { graphql } from 'gatsby';
import { Review } from './review';
import { MarkdownRemark } from '../types/graphql-types';

interface Props {
  readonly data: {
    readonly markdownRemark: MarkdownRemark;
  };
}

export const BookTemplate: React.FC<Props> = ({ data }: Props) => {
  const post = data.markdownRemark;
  const { published, author, dateCompleted, rating } = post.frontmatter;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const details = [
    {
      attr: 'Published',
      value: published,
    },
    {
      attr: 'Author',
      value: author,
    },
    {
      attr: 'Read',
      value: dateCompleted,
    },
    {
      attr: 'Rating',
      value: rating,
    },
  ];

  return (
    <Review
      imageFluid={featuredImgFluid}
      details={details}
      title={post.frontmatter.title}
      description={post.excerpt}
    >
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Review>
  );
};

export default BookTemplate;

export const query = graphql`
  query BookQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        published
        author
        dateCompleted
        rating
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
