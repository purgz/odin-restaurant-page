const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

//boilerplate to allow for multiple pages with different bundles
//using htmlwebpackplugin to generate new html each build
module.exports = {
    mode: "development",
    entry: {
        home: "./src/index.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            title: "Home Page",
            template: "./src/templates/home.html",
            chunks: ["home"],
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname,"public"),
        },
    }
}