const path = require('path');

module.exports = {
  entry: '/home/anggi/es6-tutorial/main.js',
  output: {
    path: path.resolve(__dirname, 'anggi-mengerti'),
    filename: 'main-bundle.js'
  }
};
