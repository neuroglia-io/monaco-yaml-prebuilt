import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import path from 'path';

export default {
  entry: {
    'monaco-editor': './src/editor.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
				type: 'asset/resource',
      }
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json', 'yaml'], // Add supported languages here
      customLanguages: [
        {
          label: 'yaml',
          entry: 'monaco-yaml',
          worker: {
            id: 'monaco-yaml/yamlWorker',
            entry: 'monaco-yaml/yaml.worker',
          },
        },
      ],
    }),
  ],
};