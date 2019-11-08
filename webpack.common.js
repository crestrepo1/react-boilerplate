const path = require('path');
const pkg = require('./package.json');

// Configure Babel loader
const configureBabelLoader = () => {
    return {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
        },
    };
};

// Configure Font loader
const configureFontLoader = () => {
    return {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]'
                }
            }
        ]
    };
};

const baseConfig = {
    name: pkg.name,
    entry: {
        index: './client/entry.js'
    },
    module: {
        rules: [
            configureBabelLoader(pkg.browserslist.legacyBrowsers),
            configureFontLoader(),
        ]
    }
}

module.exports = baseConfig;
