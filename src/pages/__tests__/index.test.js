import React from 'react';
import { render } from '../../../testUtils';
import { Main } from '../index';
import * as post from '../../components/post';

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const factory = (slug) => {
  const id = randomInt(1000);
  return {
    node: {
      id,
      fields: { slug: `${slug}-${id}` },
    },
  };
};

const bookFactory = () => factory('/books/a-book');
const filmFactory = () => factory('/films/a-film');
const blogFactory = () => factory('/blogs/a-blog');

const mockPost = () => <div data-testid="post">Mock Post</div>;
const renderComponent = (posts) =>
  render(
    <Main
      data={{
        markdownRemark: {
          html: '<div>Test About Content',
        },
        allMarkdownRemark: {
          totalCount: posts.length,
          edges: posts,
        },
      }}
    />
  );

const getPosts = (component) => component.getAllByTestId('post');
const selectPostType = (component, type) => component.getByText(type).click();

describe('main', () => {
  post.AnimatedPost = mockPost;

  it('matches snapshot', () => {
    expect.assertions(1);
    const { container } = renderComponent([filmFactory()]);
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
              class="sc-fznZeY caXcNG"
            >
              <div
                class="sc-fznyAO sc-fzokOt fGGcvI"
              >
                <div
                  class="sc-fzqBZW ghgqnZ"
                  style="opacity: 0; transform: translate3d(0, 100px, 0);"
                >
                  <div>
                    Test About Content
                  </div>
                </div>
              </div>
              <div
                class="sc-fznyAO sc-fznKkj kFPPHC"
              >
                <div
                  class="sc-fzqNJr fRwCKs"
                  style="opacity: 0; transform: translate3d(0, 100px, 0);"
                >
                  <div
                    class="sc-fzoyAV hWMbTj"
                  >
                    <h1>
                      Posts
                    </h1>
                    <span
                      class="sc-fzoLag lhJAeZ"
                    >
                      Total: 
                      1
                    </span>
                  </div>
                  <button
                    class="sc-fzplWN cNoNkB"
                  >
                    Films
                  </button>
                  <button
                    class="sc-fzplWN cNoNkB"
                  >
                    Books
                  </button>
                  <button
                    class="sc-fzplWN cNoNkB"
                  >
                    Blogs
                  </button>
                </div>
                <div
                  data-testid="post"
                >
                  Mock Post
                </div>
                <button
                  class="sc-fzoXzr dVSRUR"
                  disabled=""
                >
                  Previous
                </button>
                <button
                  class="sc-fzoXzr dVSRUR"
                  disabled=""
                >
                  1
                </button>
                <button
                  class="sc-fzoXzr dVSRUR"
                  disabled=""
                >
                  Next
                </button>
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
    expect.assertions(5);
    // When nothing selected returns all
    const edges = [filmFactory(), bookFactory(), blogFactory()];
    const component = renderComponent(edges);
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

  it('pages correctly', () => {
    expect.assertions(20);
    const numBooks = 25;
    const edges = [];
    for (let i = 0; i < numBooks; i++) {
      edges.push(bookFactory());
    }
    const component = renderComponent(edges);

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
