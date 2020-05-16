import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import 'jest-styled-components';
import { Post } from '../post';

describe('Post', () => {
  const defaultProps = {
    fields: {
      slug: 'slug',
    },
    frontmatter: {
      title: 'Test title',
      dateCompleted: '2020-03-01',
    },
    except: 'This is an excerpt',
  };

  let component;

  const performHover = (component) => {
    fireEvent.mouseOver(component.getByTestId('post-hover-div'));
  };

  beforeEach(() => {
    component = render(<Post {...defaultProps} />);
  });

  it('matches snapshot', () => {
    expect(component.container).toMatchSnapshot();
  });

  describe('excerpt styling', () => {
    const getExcerpt = (component) => component.getByTestId('excerpt');

    it('has max-height 0 and is hidden when not hovered', () => {
      const excerpt = getExcerpt(component);
      expect(excerpt).toHaveStyleRule('max-height', '0px');
      expect(excerpt).toHaveStyleRule('visibility', 'hidden');
    });

    it("doesn't have max-height 0 and is visible when hovered", () => {
      performHover(component);
      const excerpt = getExcerpt(component);
      expect(excerpt).not.toHaveStyleRule('max-height', '0px');
      expect(excerpt).toHaveStyleRule('visibility', 'visible');
    });
  });

  describe('PostContainer', () => {
    it('has white background on hover', () => {
      expect(
        component.getByTestId('post-container')
      ).toHaveStyleRule('background-color', 'white', { modifier: ':hover' });
    });
  });
});
