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
exports.query = exports.Generic = void 0;
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pageWrapper_1 = require("../components/pageWrapper");
const seo_1 = __importDefault(require("../components/seo"));
const gatsby_1 = require("gatsby");
const Container = styled_components_1.default.div `
  max-width: 700px;
  text-align: justify;
  margin: 0 auto;
`;
exports.Generic = ({ data }) => (React.createElement(pageWrapper_1.FullWidthWrapper, null,
    React.createElement(seo_1.default, { title: data.markdownRemark.frontmatter.title, description: data.markdownRemark.excerpt }),
    React.createElement(Container, null,
        React.createElement("h1", null, data.markdownRemark.frontmatter.title),
        React.createElement("div", { dangerouslySetInnerHTML: { __html: data.markdownRemark.html } }))));
exports.default = exports.Generic;
exports.query = gatsby_1.graphql `
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
//# sourceMappingURL=generic.js.map