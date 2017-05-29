module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      { 
        use: 'babel-loader',
        test: /\.jsx?$/, 
        exclude: /(node_modules|bower_components)/
      },
      { 
        use:[ 
          {
            loader: 'url-loader',
            options: {
              limit: 35000
            }
          }, 
        'image-webpack-loader'
        ],
        test: /\.jpg$/, 
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
}