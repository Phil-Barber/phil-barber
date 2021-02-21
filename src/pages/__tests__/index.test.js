import React from 'react';
import { render } from '../../../testUtils';
import { Main } from '../index';
import * as postsList from '../../components/postsList';

const renderComponent = () =>
  render(
    <Main
      data={{
        markdownRemark: {
          html: '<div>Test About Content',
        },
        allMarkdownRemark: {
          edges: [],
        },
      }}
    />
  );

const mockPostsList = () => <div data-testid="post">Mock Posts List</div>;

describe('main', () => {
  postsList.PostsList = mockPostsList;

  it('renders correctly', () => {
    expect.assertions(1);
    const { container } = renderComponent();
    /* eslint-disable-next-line jest/no-large-snapshots */
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="headroom-wrapper"
        >
          <div
            class="headroom headroom--unfixed"
            style="position: relative; top: 0px; left: 0px; right: 0px; z-index: 1; transform: translate3D(0, 0, 0);"
          >
            <div
              class="sc-AxjAm fEzfgO"
            >
              <a
                class="sc-AxhUy cAGPKr"
                href="/"
              >
                <h1>
                  Test title
                </h1>
              </a>
              <span
                class="sc-AxirZ gtVPNy"
                style="transform: rotate(0deg);"
              >
                &gt;
              </span>
            </div>
          </div>
        </div>
        <div
          class="sc-AxiKw jmqPVm"
        >
          <div
            class="sc-AxheI hhwjIJ"
          >
            <div
              class="sc-fzoyAV cZuQVA"
              style="opacity: 0; transform: translate3d(0, 100px, 0);"
            >
              <div
                class="sc-fzqBZW sc-fzoLag cXeyBG"
              >
                <div
                  class="sc-fzoXzr fdJzs"
                >
                  <div>
                    Test About Content
                  </div>
                </div>
              </div>
              <div
                class="sc-fzqBZW sc-fzqNJr hNiahx"
              >
                <div
                  data-testid="post"
                >
                  Mock Posts List
                </div>
              </div>
            </div>
          </div>
          <div
            class="sc-AxhCb bdrWTY"
          />
        </div>
      </div>
    `);
  });
});
