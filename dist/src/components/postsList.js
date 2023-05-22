"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsList = exports.PurePostsList = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const gatsby_1 = require("gatsby");
const react_spring_1 = require("react-spring");
const post_1 = require("./post");
const pagedList_1 = require("./pagedList");
const filterList_1 = require("./filterList");
const utils_1 = require("../utils");
const style_1 = require("../style");
const PostsHeader = styled_components_1.default.div `
  margin-bottom: ${({ theme }) => theme.spacing.normal};
`;
const PostsTitle = styled_components_1.default.div `
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
`;
const PostsCount = styled_components_1.default.span `
  font-size: 22px;
`;
const FILMS = 'films';
const BOOKS = 'books';
const BLOGS = 'blogs';
exports.PurePostsList = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    const postNodes = react_spring_1.useTransition(posts, ({ node }) => node.id, {
        unique: true,
        trail: 500 / posts.length,
        ...style_1.glideIn,
        enter: style_1.glideIn.to,
        config: react_spring_1.config.stiff,
    }).map(({ item, key, props }) => (react_1.default.createElement(post_1.AnimatedPost, Object.assign({ key: key }, item.node, { style: props }))));
    const lookupFunc = (item) => item.props.fields.slug;
    const filters = {
        [BOOKS]: utils_1.isBookSlug,
        [FILMS]: utils_1.isFilmSlug,
        [BLOGS]: utils_1.isBlogSlug,
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PostsHeader, null,
            react_1.default.createElement(PostsTitle, null,
                react_1.default.createElement("h1", null, "Posts"),
                react_1.default.createElement(PostsCount, null,
                    "Total: ",
                    postNodes.length))),
        react_1.default.createElement(filterList_1.FilterList, { filters: filters, lookupFunc: lookupFunc, items: postNodes }, (filteredItems) => react_1.default.createElement(pagedList_1.PagedList, null, filteredItems))));
};
exports.PostsList = () => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___dateCompleted], order: DESC }
        filter: { fields: { slug: { regex: "/(film)|(book)|(blog)/" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              dateCompleted
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `);
    return react_1.default.createElement(exports.PurePostsList, { data: data });
};
//# sourceMappingURL=postsList.js.map