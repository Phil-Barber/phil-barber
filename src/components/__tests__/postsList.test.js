import React from 'react';
import { render } from '../../../testUtils';
import { PurePostsList } from '../postsList';
import * as post from '../post';

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

const getPosts = (component) => component.getAllByTestId('post');
const selectPostType = (component, type) => component.getByText(type).click();

const renderComponent = (posts) => {
  return render(
    <PurePostsList
      data={{
        allMarkdownRemark: {
          edges: posts,
        },
      }}
    />
  );
};

describe('component: PostsList', () => {
  post.AnimatedPost = mockPost;
  it('renders as expected', () => {
    expect.assertions(1);
    const { container } = renderComponent([]);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="sc-AxheI eWMuli"
        >
          <div
            class="sc-Axmtr bQNzRM"
          >
            <h1>
              Posts
            </h1>
            <span
              class="sc-AxmLO cmkzjP"
            >
              Total: 
              0
            </span>
          </div>
        </div>
        <button
          class="sc-AxgMl behtmv"
        >
          books
        </button>
        <button
          class="sc-AxgMl behtmv"
        >
          films
        </button>
        <button
          class="sc-AxgMl behtmv"
        >
          blogs
        </button>
        <button
          class="sc-AxhUy gUEshH"
          disabled=""
        >
          Previous
        </button>
        <button
          class="sc-AxhUy gUEshH"
        >
          Next
        </button>
      </div>
    `);
  });

  it('applies filters correctly', () => {
    expect.assertions(5);
    // When nothing selected returns all
    //const edges = [filmFactory(), bookFactory(), blogFactory()];
    const edges = [filmFactory(), bookFactory(), blogFactory()];
    const component = renderComponent(edges);
    expect(getPosts(component)).toHaveLength(edges.length);

    // Filter films
    selectPostType(component, 'films');
    expect(getPosts(component)).toHaveLength(1);

    // Filters multiple things
    selectPostType(component, 'books');
    expect(getPosts(component)).toHaveLength(2);

    // Filters all the things
    selectPostType(component, 'blogs');
    expect(getPosts(component)).toHaveLength(3);

    // Can deselect
    selectPostType(component, 'films');
    expect(getPosts(component)).toHaveLength(2);
  });
});
