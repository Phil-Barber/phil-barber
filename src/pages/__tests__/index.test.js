import React from 'react';
import { render } from '../../../testUtils';
import { Main } from '../index';
import * as post from '../../components/post';

const edges = [
  {
    node: { id: 1, fields: { slug: '/films/a-film' } },
  },
  {
    node: { id: 2, fields: { slug: '/books/a-book' } },
  },
  {
    node: { id: 3, fields: { slug: '/blogs/a-blog' } },
  },
];
const mockPost = () => <div data-testid="post">Mock Post</div>;
const renderComponent = () =>
  render(
    <Main
      data={{
        markdownRemark: {
          html: '<div>Test About Content',
        },
        allMarkdownRemark: {
          totalCount: 2,
          edges,
        },
      }}
    />
  );

const getPosts = (component) => component.getAllByTestId('post');
const selectPostType = (component, type) => component.getByText(type).click();

describe('main', () => {
  post.AnimatedPost = mockPost;

  it('matches snapshot', () => {
    const { container } = renderComponent();
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
                class="sc-AxgMl ZJAph"
                href="/"
              >
                <h1>
                  Test title
                </h1>
              </a>
              <button
                class="sc-AxhUy blLbLW"
              >
                Let it Snow! 👈
              </button>
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
            class="sc-Axmtr bdeNGe"
          >
            <div
              class="sc-fzokOt gQGohl"
            >
              <div
                class="sc-fznKkj sc-fzqBZW gCJMSx"
              >
                <div
                  class="sc-fzqNJr dviVHk"
                  style="opacity: 0; transform: translate3d(0, 100px, 0);"
                >
                  <div>
                    Test About Content
                  </div>
                </div>
              </div>
              <div
                class="sc-fznKkj sc-fznZeY ksWrla"
              >
                <div
                  class="sc-fzoyAV ckVjra"
                  style="opacity: 0; transform: translate3d(0, 100px, 0);"
                >
                  <div
                    class="sc-fzoLag jzdMXf"
                  >
                    <h1>
                      Posts
                    </h1>
                    <span
                      class="sc-fzoXzr eEGhzv"
                    >
                      Total: 
                      2
                    </span>
                  </div>
                  <button
                    class="sc-fznyAO fYsZCV"
                  >
                    Films
                  </button>
                  <button
                    class="sc-fznyAO fYsZCV"
                  >
                    Books
                  </button>
                  <button
                    class="sc-fznyAO fYsZCV"
                  >
                    Blogs
                  </button>
                </div>
                <div
                  data-testid="post"
                >
                  Mock Post
                </div>
                <div
                  data-testid="post"
                >
                  Mock Post
                </div>
                <div
                  data-testid="post"
                >
                  Mock Post
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

  it('applies filters correctly', () => {
    // When nothing selected returns all
    const component = renderComponent();
    expect(getPosts(component)).toHaveLength(edges.length);

    // Filter films
    selectPostType(component, 'Films');
    expect(getPosts(component)).toHaveLength(1);

    // Filters multiple things
    selectPostType(component, 'Books');
    expect(getPosts(component)).toHaveLength(2);

    // Filters all the things
    selectPostType(component, 'Blogs');
    expect(getPosts(component)).toHaveLength(3);

    // Can deselect
    selectPostType(component, 'Films');
    expect(getPosts(component)).toHaveLength(2);
  });
});
