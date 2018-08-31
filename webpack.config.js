const path = require('path');

module.exports = {
  entry: './src/static/scripts/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'src', 'static', 'scripts', 'webpack')
  }
};
