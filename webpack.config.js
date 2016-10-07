/* eslint no-process-env: 0, global-require:0 */
'use strict';

var conf = getWebpackConfig(process.env.NODE_ENV, require('./.ng2-config'));
conf.module.loaders.push(
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'file'
  }
);

module.exports = conf;

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
