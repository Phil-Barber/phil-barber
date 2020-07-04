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
const React = __importStar(require("react"));
const react_helmet_1 = require("react-helmet");
const gatsby_1 = require("gatsby");
const SEO = ({ description, lang, meta, title }) => {
    const { site } = gatsby_1.useStaticQuery(gatsby_1.graphql `
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `);
    const metaDescription = description || site.siteMetadata.description;
    return (React.createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang,
        }, title: title, titleTemplate: `%s | ${site.siteMetadata.title}`, meta: [
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: title,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
        ].concat(meta) }));
};
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};
exports.default = SEO;
//# sourceMappingURL=seo.js.map