const { generateConfig } = require('gatsby-plugin-ts-config');

module.exports = generateConfig({
  configDir: '.gatsby',
  /*
  babel: {
    plugins: [
      [require.resolve('babel-plugin-module-resolver')],
    ],
  },
  */
});
