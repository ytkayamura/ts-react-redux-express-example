const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode;
  return {
    entry: './client/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },

    devtool: (mode === 'development') ? 'inline-source-map' : false,

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    module: {
      rules: [
        {
          loader: 'ts-loader',
          test: /\.(ts|tsx)$/,
          exclude: [
            /node_modules/,
          ],
          options: {
            configFile: (mode === 'development') ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
          },
        },
      ],
    },

    devServer: {
      proxy: {
        '/api': 'http://localhost:8081',
      },
    },
  };
};
