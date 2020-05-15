import React from 'react';
import { render } from '../../../testUtils';
import { MyFiles } from '../my-files';
import { useStaticQuery } from 'gatsby';

describe('MyFiles', () => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Test title',
      },
    },
  }));

  it('Matches snapshot', () => {
    const { container } = render(
      <MyFiles
        data={{
          allFile: {
            edges: [
              {
                node: {
                  relativePath: './test',
                  prettySize: 10,
                  extension: '.js',
                  birthTime: '12:00pm',
                },
              },
              {
                node: {
                  relativePath: './test2',
                  prettySize: 20,
                  extension: '.js',
                  birthTime: '12:00pm',
                },
              },
            ],
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
