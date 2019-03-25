const path = require('path');

module.exports = {
    entry: './app/app.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/assets/js')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
