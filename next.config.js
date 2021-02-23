// next.config.js
const withTranspile = require('next-transpile-modules')(['ol', 'rlayers']);
const path = require('path');

module.exports = withTranspile({
    webpack: (config, options) => {
        if (!options.isServer)
            return config;

        config.plugins.push(new options.webpack.ProvidePlugin({
            'Blob': 'node-blob',
            'window': ['rlayers/ServerDOM', 'window'],
            'document': ['rlayers/ServerDOM', 'document'],
            'navigator': ['rlayers/ServerDOM', 'window', 'navigator'],
            'getComputedStyle': ['rlayers/ServerDOM', 'window', 'getComputedStyle'],
            'requestAnimationFrame': ['rlayers/ServerDOM', 'window', 'requestAnimationFrame'],
            'Image': ['rlayers/ServerDOM', 'window', 'Image'],
        }));
        return config;
    }
});