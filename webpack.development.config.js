var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js',
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: 'image/png' }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
