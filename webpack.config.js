const path = require('path');

const root = __dirname;
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: path.resolve(root, './src/index.ts'),
    optimization: {
        minimize: !isDev
    },
    // ... other configurations ...
    module: {
        rules: [
            {
                test: /\.ts|tsx|js$/,
                use: ['ts-loader'],
                exclude: /node_modules|__tests__/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        extensionAlias: { '.js': ['.js', '.ts'] },
        modules: [
            'node_modules'
        ],
        alias: {
            '~/': path.resolve(root, 'src'),
        }
    },
    output: {
        filename: `bundle.js`,
        path: path.resolve(root, './dist'),
    }
};