"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const gatsby_source_filesystem_1 = require("gatsby-source-filesystem");
const utils_1 = require("../src/utils");
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = gatsby_source_filesystem_1.createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
    const templateMap = [
        {
            check: utils_1.isSrcMarkdown,
        },
        {
            check: utils_1.isFilmSlug,
            template: './src/templates/film.tsx',
        },
        {
            check: utils_1.isBookSlug,
            template: './src/templates/book.tsx',
        },
    ];
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        let matched = false;
        for (let i = 0; i < templateMap.length; i++) {
            const { check, template } = templateMap[i];
            if (check(slug)) {
                matched = true;
                if (template) {
                    createPage({
                        path: slug,
                        component: path_1.default.resolve(template),
                        context: { slug },
                    });
                }
                break;
            }
        }
        if (!matched) {
            createPage({
                path: slug,
                component: path_1.default.resolve('./src/templates/generic.tsx'),
                context: { slug },
            });
        }
    });
};
//# sourceMappingURL=gatsby-node.js.map