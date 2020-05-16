import React from 'react';
import { shallow } from 'enzyme';
import SEO from '../seo';
import * as Gatsby from 'gatsby';

describe('SEO', () => {
  const siteMetadata = {
    title: 'Test title template',
    description: 'Test description',
    author: 'Test author',
  };
  Gatsby.useStaticQuery = jest.fn(() => ({ site: { siteMetadata } }));
  const defaultProps = {
    title: 'Test title',
  };

  describe('defaultProps', () => {
    it('Matches snapshot', () => {
      const component = shallow(<SEO {...defaultProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('metaDescription', () => {
    const getDescription = (component) =>
      component.props().meta.find(({ name }) => name === 'description').content;

    it('uses metaDataDescription if description prop not provided', () => {
      const component = shallow(<SEO {...defaultProps} />);
      expect(getDescription(component)).toBe(siteMetadata.description);
    });

    it('uses description prop if provided', () => {
      const description = 'Real description';
      const component = shallow(
        <SEO {...defaultProps} description={description} />
      );
      expect(getDescription(component)).toBe(description);
    });
  });

  it('includes additional meta fields', () => {
    const additionalField = { name: 'addtional', content: 'field' };
    const component = shallow(
      <SEO {...defaultProps} meta={[additionalField]} />
    );
    const metaProp = component.props().meta;
    expect(metaProp.length).toBeGreaterThan(1);
    expect(metaProp).toEqual(expect.arrayContaining([additionalField]));
  });
});
