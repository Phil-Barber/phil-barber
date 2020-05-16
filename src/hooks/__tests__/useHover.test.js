import React from 'react';
import { render, fireEvent } from '../../../testUtils';
import { useHover } from '../useHover';

const hoverDivId = 'hoverMe';
const hiddenDivId = 'show-on-hover';
const HoverTest = () => {
  const [ref, value] = useHover();
  return (
    <div ref={ref} data-testid={hoverDivId}>
      {value && <div data-testid={hiddenDivId} />}
    </div>
  );
};
const getHoverDiv = (component) => component.getByTestId(hoverDivId);
const getHiddenDiv = (component) => component.queryByTestId(hiddenDivId);

describe('useHover', () => {
  it('sets value to true on mouseover and false on mouseOut', () => {
    const component = render(<HoverTest />);
    const hoverDiv = getHoverDiv(component);
    // starts as false
    expect(getHiddenDiv(component)).not.toBeInTheDocument();

    // true on mouseoOver
    fireEvent.mouseOver(hoverDiv);
    expect(getHiddenDiv(component)).toBeInTheDocument();

    // false on mouseOut
    fireEvent.mouseOut(hoverDiv);
    expect(getHiddenDiv(component)).not.toBeInTheDocument();
  });
});
