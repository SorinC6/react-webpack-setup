var path = require("path");

module.exports = {
  // 'production' mode would minify and uglify the code, and use React's production code
  mode: "development",
  // entry is the starting point for the web made by our files through imports and exports
  entry: path.resolve(__dirname, "index.js"),
  // all code will get concatenated into a single bundle.js inside a bundle folder
  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: "bundle.js"
  },
  // types of files we want Webpack to bundle
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /mode_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
