const path = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode;
  return {
    entry: './client/Hello.tsx',
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
          test: /\.tsx$/,
          exclude: [
            /node_modules/,
          ],
          options: {
            configFile: (mode === 'development') ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
          },
        },
      ],
    },
  };
};