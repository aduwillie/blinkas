const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: "./src/frontend/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(s*)css$/,
                use:  ['style-loader', 'css-loader', 'sass-loader']
            },
            { 
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/backend/views/index.pug'
        }),
      ]
}
module.exports = config