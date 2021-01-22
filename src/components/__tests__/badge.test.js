import React from 'react';
import { render } from '../../../testUtils';
import 'jest-styled-components';
import { Badge } from '../badge';
import { theme } from '../../style';

describe('badge', () => {
  let component;
  const badgeText = 'Hi';

  const getBadge = (container) => container.getByText(badgeText);

  describe('not selected', () => {
    beforeEach(() => {
      component = render(<Badge>{badgeText}</Badge>);
    });

    it('matches snapshot', () => {
      expect(component.container).toMatchInlineSnapshot(`
        .c0 {
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 12px;
          display: inline-block;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          padding: 0 8px;
          border-radius: 24px;
          margin-right: 4px;
          background-color: #e6e9eb;
          color: #000000;
        }

        <div>
          <button
            class="c0"
          >
            Hi
          </button>
        </div>
      `);
    });
  });

  describe('selected', () => {
    beforeEach(() => {
      component = render(<Badge isSelected>{badgeText}</Badge>);
    });

    it('matches snapshot', () => {
      expect(component.container).toMatchInlineSnapshot(`
        .c0 {
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 12px;
          display: inline-block;
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          padding: 0 8px;
          border-radius: 24px;
          margin-right: 4px;
          background-color: #000000;
          color: #e6e9eb;
        }

        <div>
          <button
            class="c0"
          >
            Hi
          </button>
        </div>
      `);
    });
  });
});
