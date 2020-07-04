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
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = exports.BookTemplate = void 0;
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const review_1 = require("./review");
exports.BookTemplate = ({ data }) => {
    const post = data.markdownRemark;
    const { published, author, dateCompleted, rating } = post.frontmatter;
    const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
    const details = [
        {
            attr: 'Published',
            value: published,
        },
        {
            attr: 'Author',
            value: author,
        },
        {
            attr: 'Read',
            value: dateCompleted,
        },
        {
            attr: 'Rating',
            value: rating,
        },
    ];
    return (React.createElement(review_1.Review, { imageFluid: featuredImgFluid, details: details, title: post.frontmatter.title, description: post.excerpt },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: post.html } })));
};
exports.default = exports.BookTemplate;
exports.query = gatsby_1.graphql `
  query BookQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        published
        author
        dateCompleted
        rating
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=book.js.map