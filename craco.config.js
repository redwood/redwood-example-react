let webpack = require('webpack')

module.exports = {
    webpack: {
        resolve: {
            fallback: {
                buffer: require.resolve('buffer/'),
            },
            alias: {
                process: 'process/browser',
            },
        },
        plugins: [
            new webpack.ProvidePlugin({
                 Buffer: ['buffer', 'Buffer'],
            }),
        ],
    }
}