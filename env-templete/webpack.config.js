var path = require('path');

const publicDir = 'public';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, publicDir),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, publicDir),
        compress: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}