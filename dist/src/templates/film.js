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
exports.query = exports.FilmTemplate = void 0;
const React = __importStar(require("react"));
const gatsby_1 = require("gatsby");
const review_1 = require("./review");
exports.FilmTemplate = ({ data }) => {
    const post = data.markdownRemark;
    const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
    const { released, dateCompleted, director, starring } = post.frontmatter;
    const details = [
        {
            attr: 'Released',
            value: released,
        },
        {
            attr: 'Watched',
            value: dateCompleted,
        },
        {
            attr: 'Director',
            value: director.join(', '),
        },
        {
            attr: 'Starring',
            value: starring.join(', '),
        },
    ];
    return (React.createElement(review_1.Review, { imageFluid: featuredImgFluid, details: details, extraDetail: React.createElement(React.Fragment, null,
            "See all my film ratings on",
            ' ',
            React.createElement("a", { href: "https://www.imdb.com/user/ur46443696/ratings?ref_=nv_usr_rt_4", target: "_blank", rel: "noopener noreferrer" }, "IMDB"),
            "."), title: post.frontmatter.title, description: post.excerpt },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: post.html } })));
};
exports.default = exports.FilmTemplate;
exports.query = gatsby_1.graphql `
  query FilmQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        released
        dateCompleted
        director
        starring
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=film.js.map