import React from 'react';
import { render } from '../../../testUtils';
import { Main } from '../index';
import * as post from '../../components/post';

describe('Main', () => {
  const mockPost = () => <div>Mock Post</div>;
  post.AnimatedPost = mockPost;

  it('Matches snapshot', () => {
    const { container } = render(
      <Main
        data={{
          markdownRemark: {
            html: '<div>Test About Content',
          },
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
