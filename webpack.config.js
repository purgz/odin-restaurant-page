const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

//boilerplate to allow for multiple pages with different bundles
//using htmlwebpackplugin to generate new html each build
module.exports = {
    mode: "development",
    entry: {
        home: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Home Page",
            template: "./src/templates/home.html",
            chunks: ["home"],
        })
    ],
    devServer: {
        static: "./dist",
    }
}