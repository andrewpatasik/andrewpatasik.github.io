const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        home: "./src/js/script.js",
        cv: "./src/js/cv.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        assetModuleFilename: "images/[name][ext][query]",
    },
    module: {
        rules:[
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
        new HtmlWebpackPlugin({
            title: "andrewpatasik | Web Designer",
            filename: "index.html",
            template: "src/pages/index.html",
            chunks: ["home"],
            minify: true
        }),
        new HtmlWebpackPlugin({
            title: "andrewpatasik | Web Designer",
            filename: "cv.html",
            template: "src/pages/cv.html",
            chunks: ["cv"],
            minify: true
        })
    ]
}