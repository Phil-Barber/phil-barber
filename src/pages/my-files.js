import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import { PageLayout } from '../components/styled';

const MyFiles = ({ data }) => {
  return (
    <PageWrapper>
      <PageLayout>
        <div>
          <h1>My Site&apos;s Files</h1>
          <table>
            <thead>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>{node.relativePath}</td>
                  <td>{node.prettySize}</td>
                  <td>{node.extension}</td>
                  <td>{node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default MyFiles;

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
