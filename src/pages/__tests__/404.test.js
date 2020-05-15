import React from 'react';
import { render } from '../../../testUtils';
import { FourOhFour } from '../404';

describe('FourOhFour', () => {
  it('Matches snapshot', () => {
    const { container } = render(<FourOhFour />);
    expect(container).toMatchSnapshot();
  });
});
