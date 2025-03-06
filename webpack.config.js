const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Este es el archivo donde escribirás tu código React
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // El archivo HTML que ya tienes
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Servir archivos desde 'dist'
    },
    port: 3000,  // O cualquier puerto que prefieras
    open: true,  // Abrir automáticamente el navegador
    hot: true,   // Activar la recarga en caliente
  },
};
