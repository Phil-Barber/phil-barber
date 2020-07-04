import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import { isFilmSlug, isBookSlug, isSrcMarkdown } from '../src/utils';
import { MarkdownRemarkConnection } from '../src/types/graphql-types';
import { CreateBabelConfigArgs, CreatePagesArgs, CreateNodeArgs } from 'gatsby';

exports.onCreateBabelConfig = ({ actions }: CreateBabelConfigArgs) => {
  actions.setBabelPreset({ name: 'babel-preset-gatsby', options: {} });
};

exports.onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions;
  const result: {
    data?: { allMarkdownRemark?: MarkdownRemarkConnection };
  } = await graphql(`
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
      check: isSrcMarkdown,
    },
    {
      check: isFilmSlug,
      template: './src/templates/film.tsx',
    },
    {
      check: isBookSlug,
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
            component: path.resolve(template),
            context: { slug },
          });
        }
        break;
      }
    }
    if (!matched) {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/generic.tsx'),
        context: { slug },
      });
    }
  });
};
