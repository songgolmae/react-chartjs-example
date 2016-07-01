module.exports = {
  entry: {
    bar: './bar/index.jsx',
    line: './line/index.jsx'
  },
  output: {
    filename: '[name]/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ["transform-react-jsx"]
      }
    }]
  }
}
