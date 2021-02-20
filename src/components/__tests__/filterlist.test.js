import React from 'react';
import { render } from '../../../testUtils';
import { FilterList } from '../filterList';

const childId = 'child';

const renderComponent = ({
  numChildren = 4,
  lookupFunc = (item) => item.props.lookup,
  filters = {
    even: (key) => !(key % 2),
    odd: (key) => !!(key % 2),
  },
}) => {
  const items = [];
  for (let i = 0; i < numChildren; i++) {
    items.push(
      <div key={i} lookup={i} data-testid={childId}>
        Child {i}
      </div>
    );
  }
  return render(
    <FilterList lookupFunc={lookupFunc} filters={filters} items={items}>
      {(filteredChildren) => filteredChildren}
    </FilterList>
  );
};

describe('component FilterList', () => {
  it('renders filter buttons correctly', () => {
    expect.assertions(1);
    const { container } = renderComponent({ numChildren: 0 });
    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="sc-AxjAm hSVvMT"
        >
          even
        </button>
        <button
          class="sc-AxjAm hSVvMT"
        >
          odd
        </button>
      </div>
    `);
  });

  it('applies filters correctly', () => {
    expect.assertions(4);
    const numChildren = 3;
    const component = renderComponent({ numChildren });

    // No filters to start
    let children = component.getAllByTestId(childId);
    expect(children).toHaveLength(numChildren);

    // Only displays even
    component.getByText('even').click();
    children = component.getAllByTestId(childId);
    expect(children).toHaveLength(2);

    // Displays both when both selected
    component.getByText('odd').click();
    children = component.getAllByTestId(childId);
    expect(children).toHaveLength(numChildren);

    // Only displays odd when even deselected
    component.getByText('even').click();
    children = component.getAllByTestId(childId);
    expect(children).toHaveLength(1);
  });
});
