const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    publicPath: 'http://localhost:3000/',
    chainWebpack: (/** @type {import('webpack-chain')} */ config) => {
        config.plugin('federation')
            .use(ModuleFederationPlugin, [{
                name: 'app',
                remotes: {
                    'components': 'components@http://localhost:3001/remoteEntry.js'
                }
            }]);
        
        config.devServer
            .port(3000)
            .compress(true)
            .hot(true)
            .headers({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers':
                'X-Requested-With, content-type, Authorization',
            });
    }
}