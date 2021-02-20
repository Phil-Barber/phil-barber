import React from 'react';
import { render } from '../../../testUtils';
import { PagedList } from '../PagedList';

const renderComponent = ({ numChildren = 25, props = {} }) => {
  const children = [];
  for (let i = 0; i < numChildren; i++) {
    children.push(<div key={i}>Child {i}</div>);
  }
  return render(<PagedList {...props}>{children}</PagedList>);
};

describe('component PagedList', () => {
  it('matches snapshot', () => {
    expect.assertions(1);
    const { container } = renderComponent({ numChildren: 1 });
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        margin: 0px 4px;
      }

      <div>
        <div>
          Child 
          0
        </div>
        <button
          class="c0"
          disabled=""
        >
          Previous
        </button>
        <button
          class="c0"
          disabled=""
        >
          1
        </button>
        <button
          class="c0"
          disabled=""
        >
          Next
        </button>
      </div>
    `);
  });

  /* eslint-disable-next-line jest/prefer-expect-assertions */
  it('renders correct number of pages', () => {
    const numChildren = 4;
    expect.assertions(numChildren);
    const component = renderComponent({
      numChildren,
      props: { pageSize: 1 },
    });
    for (let i = 1; i < numChildren + 1; i++) {
      expect(component.getByText(`${i}`)).toBeInTheDocument();
    }
  });

  it('buttons work correctly', () => {
    expect.assertions(20);
    const numChildren = 25;
    const component = renderComponent({ numChildren });

    // Initial buttons correct
    expect(component.getByText('Previous')).toBeDisabled();
    expect(component.getByText('1')).toBeDisabled();
    expect(component.getByText('2')).not.toBeDisabled();
    expect(component.getByText('3')).not.toBeDisabled();
    expect(component.getByText('Next')).not.toBeDisabled();

    // Can select specific page
    component.getByText('2').click();
    expect(component.getByText('Previous')).not.toBeDisabled();
    expect(component.getByText('1')).not.toBeDisabled();
    expect(component.getByText('2')).toBeDisabled();
    expect(component.getByText('3')).not.toBeDisabled();
    expect(component.getByText('Next')).not.toBeDisabled();

    // Next button works
    component.getByText('Next').click();
    expect(component.getByText('Previous')).not.toBeDisabled();
    expect(component.getByText('1')).not.toBeDisabled();
    expect(component.getByText('2')).not.toBeDisabled();
    expect(component.getByText('3')).toBeDisabled();
    expect(component.getByText('Next')).toBeDisabled();

    // Previous button works
    component.getByText('Previous').click();
    expect(component.getByText('Previous')).not.toBeDisabled();
    expect(component.getByText('1')).not.toBeDisabled();
    expect(component.getByText('2')).toBeDisabled();
    expect(component.getByText('3')).not.toBeDisabled();
    expect(component.getByText('Next')).not.toBeDisabled();
  });
});
