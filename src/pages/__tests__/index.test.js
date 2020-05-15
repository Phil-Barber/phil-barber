import React from 'react';
import { render } from '../../../testUtils';
import { Main } from '../index';
import { useStaticQuery } from 'gatsby';
import * as post from '../../components/post';

describe('Main', () => {
  jest.spyOn(post, 'Post').mockImplementation(() => <div>Mock Post</div>);

  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Test title',
      },
    },
  }));

  it('Matches snapshot', () => {
    const { container } = render(
      <Main
        data={{
          allMarkdownRemark: {
            totalCount: 2,
            edges: [{ node: { id: 1 } }, { node: { id: 2 } }],
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
