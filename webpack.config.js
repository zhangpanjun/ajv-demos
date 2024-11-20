
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js", 
    clean: true, 
    publicPath: '' 
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'public/index.html')
    }),
  ],
  devServer: {
    port: "auto", 
    open: true, 
    hot: 'only',

  },

  mode: "development", 
};