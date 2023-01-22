const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["@babel/preset-react", {runtime: "automatic"}]
                        ],
                        plugins: ["babel-plugin-styled-components"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["@babel/preset-react", {runtime: "automatic"}]
                            ],
                            plugins: ["babel-plugin-styled-components"]
                        },
                    },
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: "camelCase"
                            }
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: "camelCase"
                            }
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp(e*)g|gif)$/,
                type: "asset/resource"
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        extensions: ['.js','.jsx', '.scss', '.css', '.ts', '.tsx']
    },
}
