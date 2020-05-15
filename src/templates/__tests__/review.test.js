import React from 'react';
import { render } from '../../../testUtils';
import { Review } from '../review';

describe('Review', () => {
  it('Matches snapshot', () => {
    const { container } = render(
      <Review
        imageFluid="mockFluid"
        details={[
          { attr: 'Attribute1', value: 'test Value' },
          { attr: 'Attrivbute2', value: 'test value2' },
        ]}
        title="Test title"
        describe="This is a description"
      >
        <div>Child</div>
      </Review>
    );
    expect(container).toMatchSnapshot();
  });
});
