const fs = require('fs');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const publicPath = '/';
const buildPath = path.join(__dirname, 'docs');

module.exports = {
  name: 'AoflAdmin',
  build: {
    path: buildPath,
    publicPath,
    eslint: {
      options: {
        config: path.join(__dirname, '.eslintrc.js')
      }
    },
    css: {
      global: {
        purgeCss: {
          whitelist: ['loaded']
        }
      }
    },
    extend: () => {
      const config = {
        plugins: [],
        module: {
          rules: []
        }
      };

      if (process.env.NODE_ENV === 'development') {
        config.plugins.push(new LiveReloadPlugin());
      }

      return config;
    }
  },
  devServer: {
    contentBase: buildPath,
    publicPath,
    openPage: publicPath.replace(/^\//, '')
  }
};