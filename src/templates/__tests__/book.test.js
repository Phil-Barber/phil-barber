import React from 'react';
import { shallow } from 'enzyme';
import { BookTemplate } from '../book';

describe('BookTemplate', () => {
  it('Matches snapshot', () => {
    const container = shallow(
      <BookTemplate
        data={{
          markdownRemark: {
            html: '<div>This is the book review</div>',
            frontmatter: {
              title: 'BookTemplate title',
              published: '2019',
              dateCompleted: '2018-02-11',
              author: 'Collin',
              rating: '4/5',
              featuredImage: {
                childImageSharp: {
                  fluid: 'ImageFluid',
                },
              },
            },
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
