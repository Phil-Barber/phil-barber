import React from 'react';
import { render } from '../../../testUtils';
import { MyFiles } from '../my-files';

describe('MyFiles', () => {
  it('Matches snapshot', () => {
    const { container } = render(
      <MyFiles
        data={{
          allFile: {
            edges: [
              {
                node: {
                  relativePath: './test',
                  prettySize: 10,
                  extension: '.js',
                  birthTime: '12:00pm',
                },
              },
              {
                node: {
                  relativePath: './test2',
                  prettySize: 20,
                  extension: '.js',
                  birthTime: '12:00pm',
                },
              },
            ],
          },
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
