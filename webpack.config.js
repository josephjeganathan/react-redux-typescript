var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.join(__dirname, 'src'); 

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.tsx'
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    preLoaders: [{
      test: /\.tsx?$/,
      loader: 'tslint',
      include: SRC_DIR
    }],
    loaders: [
      { test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader'], include: path.join(__dirname, 'src') }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
}
