import * as React from 'react';
import { graphql } from 'gatsby';
import { FullWidthWrapper } from '../components/pageWrapper';
import { PageLayout } from '../components/styled';
import SEO from '../components/seo';
import { MarkdownRemark } from '../types/graphql-types';

interface Props {
  readonly data: {
    readonly markdownRemark: MarkdownRemark;
  };
}

export const Now: React.FC<Props> = ({ data }) => {
  const nowContent = data.markdownRemark;
  return (
    <FullWidthWrapper>
      <PageLayout>
        <SEO title="Now" description="now now now" />
        <div dangerouslySetInnerHTML={{ __html: nowContent.html }} />
        <img
          src="https://api.thegreenwebfoundation.org/greencheckimage/phil-barber.uk"
          alt="This website is hosted Green - checked by thegreenwebfoundation.org"
        />
      </PageLayout>
    </FullWidthWrapper>
  );
};

export default Now;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/markdown/now/" } }) {
      html
    }
  }
`;
