import React from 'react';
import { render } from '../../../testUtils';
import { Generic } from '../generic';

describe('Generic', () => {
  it('Matches snapshot', () => {
    const { container } = render(
      <Generic
        data={{
          markdownRemark: {
            html: '<div>Test Page</div>',
            excerpt: 'Test excerpt',
            frontmatter: {
              title: 'Title',
            },
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
