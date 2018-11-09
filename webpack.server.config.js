const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
  const mode = argv.mode;
  return {
    entry: './server/server.ts',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    module: {
      rules: [
        (mode === 'development') ? {
          enforce: 'pre',
          loader: 'tslint-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
          options: {
            emitErrors: false,
          }
        } : {},
        {
          loader: 'ts-loader',
          test: /\.ts$/,
          exclude: [
            /node_modules/
          ],
          options: {
            configFile: (mode === 'development') ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
          }
        }
      ]
    },
    resolve: {
      extensions: [ '.ts' ]
    },
    output: {
      filename: 'server.bundle.js',
      path: path.resolve(__dirname, 'server')
    }
  };
};
