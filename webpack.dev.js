const merge = require('webpack-merge');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

// config files
const baseConfig = require('./webpack.common.js');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configureCss = () => {
    return {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    localIdentName: '[name]__[local]',
                    modules: true
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    config: {
                        path: './postcss.config.js'
                    }
                }
            }
        ]
    }
}

// Configure Html webpack
const configureHtml = () => {
    return {
        template: './client/index.html',
    };
};

// Configure Image loader
const configureImageLoader = (buildType) => {
    return {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash].[ext]'
                }
            }
        ]
    };
};

const configureDevServer = () => {
    return {
        // --content-base is which directory is being served
        contentBase: path.resolve(__dirname, 'client'),
        inline: true,
        // When using the HTML5 History API,
        // the index.html page will likely have be served in place of any 404
        historyApiFallback: true,
        hot: true,
        stats: 'errors-only',
        proxy: [
            {
                path: '/api',
                target: 'http://localhost:8090',
                secure: false,
                changeOrigin: true
            }
        ],
    }
}

// Production module exports
module.exports = merge(
    baseConfig,
    {
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: `[name].bundle.js`,
            chunkFilename: '[name].bundle.js',
            publicPath: 'http://localhost:8080/'
        },
        context: path.resolve(__dirname),
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: configureDevServer(),
        module: {
            rules: [
                configureCss(),
                configureImageLoader(),
            ],
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin(configureHtml()),
            // Add any properties defined here to globals object in .eslintrc
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(pkg.version),
                ENV: JSON.stringify('dev')
            })
        ],
    }
)
