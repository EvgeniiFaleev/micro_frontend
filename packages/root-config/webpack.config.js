const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "root-config.bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "system"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.ejs"
        })
    ],
    devServer: {
        port: 9000,
        historyApiFallback: true
    },
    externals: ["single-spa"]
};
