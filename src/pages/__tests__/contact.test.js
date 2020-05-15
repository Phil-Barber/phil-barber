import React from 'react';
import { render } from '../../../testUtils';
import { Contact } from '../contact';
import * as form from '../../components/contactForm';

describe('Contact', () => {
  jest
    .spyOn(form, 'ContactForm')
    .mockImplementation(() => <div>Mock Form</div>);

  it('Matches snapshot', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
