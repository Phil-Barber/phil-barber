const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

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
      regex: /\/films\//,
      template: './src/templates/film.js',
    },
    {
      regex: /\/books\//,
      template: './src/templates/book.js',
    },
  ];

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.fields.slug;
    for (let i = 0; i < templateMap.length; i++) {
      const { regex, template } = templateMap[i];
      if (regex.test(slug)) {
        createPage({
          path: slug,
          component: path.resolve(template),
          context: { slug },
        });
        break;
      }
    }
  });
};
