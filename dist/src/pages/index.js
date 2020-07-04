"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.Main = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importStar(require("styled-components"));
const react_spring_1 = require("react-spring");
const gatsby_1 = require("gatsby");
const pageWrapper_1 = __importDefault(require("../components/pageWrapper"));
const seo_1 = __importDefault(require("../components/seo"));
const post_1 = require("../components/post");
const style_1 = require("../style");
const Column = styled_components_1.default.div `
  padding: ${({ theme }) => theme.spacing.normal};
`;
const centerLayout = styled_components_1.css `
  margin: auto;
  max-width: 640px;
`;
const PostsColumn = styled_components_1.default(Column) `
  flex-grow: 5;
  flex-basis: 200px;

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
  }
`;
const Container = styled_components_1.default.div `
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  min-height: 100vh;

  @media ${style_1.twoColumnMinWidth} {
    flex-direction: column;
    height: unset;

    ${PostsColumn} {
      ${centerLayout}
      padding: 0;
    }
  }
`;
const AboutColumn = styled_components_1.default(Column) `
  flex-grow: 6;
  flex-basis: 300px;
  h1 {
    display: inline-block;
    border-bottom: 1px solid;
  }
`;
const AboutText = styled_components_1.default(react_spring_1.animated.div) `
  ${centerLayout}
`;
const PostsTitle = styled_components_1.default(react_spring_1.animated.div) `
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
`;
const PostsCount = styled_components_1.default.span `
  font-size: 22px;
`;
exports.Main = ({ data }) => {
    const aboutContent = data.markdownRemark;
    const posts = data.allMarkdownRemark.edges;
    const entranceAnimation = react_spring_1.useSpring(style_1.glideIn);
    const transitions = react_spring_1.useTransition(posts, ({ node }) => node.id, {
        unique: true,
        trail: 500 / posts.length,
        ...style_1.glideIn,
        enter: style_1.glideIn.to,
        config: react_spring_1.config.stiff,
    });
    return (react_1.default.createElement(pageWrapper_1.default, null,
        react_1.default.createElement(seo_1.default, { title: "Phil Barber", description: "Homepage" }),
        react_1.default.createElement(Container, null,
            react_1.default.createElement(AboutColumn, null,
                react_1.default.createElement(AboutText, { style: entranceAnimation, dangerouslySetInnerHTML: { __html: aboutContent.html } })),
            react_1.default.createElement(PostsColumn, null,
                react_1.default.createElement(PostsTitle, { style: entranceAnimation },
                    react_1.default.createElement("h1", null, "Posts"),
                    react_1.default.createElement(PostsCount, null,
                        "Total: ",
                        data.allMarkdownRemark.totalCount)),
                transitions.map(({ item, key, props }) => (react_1.default.createElement(post_1.AnimatedPost, Object.assign({ key: key }, item.node, { style: props }))))))));
};
exports.default = exports.Main;
exports.query = gatsby_1.graphql `
  query {
    markdownRemark(fields: { slug: { eq: "/markdown/about/" } }) {
      html
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___dateCompleted], order: DESC }
      filter: { fields: { slug: { regex: "/(film)|(book)/" } } }
    ) {
      totalCount
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
`;
//# sourceMappingURL=index.js.map