const {
  override,
  addWebpackModuleRule,
// eslint-disable-next-line import/no-extraneous-dependencies
} = require('customize-cra');
const path = require('path');

module.exports = override(
  (config) => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
  },
  // scss全局变量
  addWebpackModuleRule({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
      {
        loader: 'sass-resources-loader',
        options: {
          // 注意在项目中新增/src/assets/scss/varable.scss文件
          resources: ['./src/assets/scss/varable.scss'],
        },
      },
    ],
  }),
);
