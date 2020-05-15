import React from 'react';
import { shallow } from 'enzyme';
import { FilmTemplate } from '../film';

describe('FilmTemplate', () => {
  it('Matches snapshot', () => {
    const container = shallow(
      <FilmTemplate
        data={{
          markdownRemark: {
            html: '<div>This is the film review</div>',
            frontmatter: {
              title: 'FilmTemplate title',
              released: '2019',
              dateCompleted: '2018-02-11',
              director: ['Director 1', 'Director 2'],
              starring: ['Some Gal', 'Some Guy'],
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
