/* eslint no-process-env: 0, global-require:0 */
'use strict';

var conf = getWebpackConfig(process.env.NODE_ENV, require('./.ng2-config'));
conf.module.loaders = [
  {
    test: /\.ts$/,
    loader: 'ts-loader',
    exclude: [/\.(spec|e2e)\.ts$/]
  },
  {
    test: /\.json$/,
    loader: 'json-loader',
    exclude: /node_modules/
  },
  {
    test: /\.html$/,
    loader: 'raw-loader',
    exclude: /node_modules/
    // exclude: helpers.excludeIndexHtml(conf.src, conf.htmlIndexes)
  },
  {
    test: /\.md$/,
    loader: 'html!markdown',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    exclude: /node_modules/
  },
  {
    test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
    loader : 'file-loader',
    exclude: /node_modules/
  },
  {
    test: /\.(jpg|png|gif)$/,
    loader: 'url?limit=10000',
    exclude: /node_modules/
  }
];

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
