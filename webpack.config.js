module.exports = (env) => env === 'dev'
    ? require('./webpack.config.dev')
    : require('./webpack.config.prod');