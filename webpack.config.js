const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        })
    ]
}