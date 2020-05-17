const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { isFilmSlug, isBookSlug } = require('./src/utils');

exports.onCreateNode = ({ node, getNode, actions }) => {
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
      check: isFilmSlug,
      template: './src/templates/film.js',
    },
    {
      check: isBookSlug,
      template: './src/templates/book.js',
    },
  ];

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    let matched = false;
    for (let i = 0; i < templateMap.length; i++) {
      const { check, template } = templateMap[i];
      if (check(slug)) {
        matched = true;
        createPage({
          path: slug,
          component: path.resolve(template),
          context: { slug },
        });
        break;
      }
    }
    if (!matched) {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/generic.js'),
        context: { slug },
      });
    }
  });
};
