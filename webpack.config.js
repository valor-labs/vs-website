/* eslint no-process-env: 0, global-require:0 */
'use strict';

module.exports = getWebpackConfig(process.env.NODE_ENV, require('./.ng2-config'));

function getWebpackConfig(env, config) {
  switch (env) {
  case 'prod':
  case 'production':
    return require('ng2-webpack-config').webpack.prod(config);
  case 'test':
  case 'testing':
    return require('ng2-webpack-config').webpack.test(config);
  case 'dev':
  case 'development':
  default:
    return require('ng2-webpack-config').webpack.dev(config);
  }
}
