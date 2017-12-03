const path = require('path');

module.exports = {
  entry: __dirname + "/src/index.js", // トランスパイル対象
  output: {
    path: __dirname + '/dist', // 出力先ディレクトリ
    filename: 'bundle.js' // 入力されたファイルをまとめて出力するときのファイル名
  },
  module: {
    rules: [
      {
        // ローダーの処理対象ファイル
        test: /\.js[x]?$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react"],
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"), // distディレクトリのファイルを確認する
    port: 3000, // 3000ポートを利用
  },
  resolve: {
    extensions: ['.js', '.jsx'] // jsファイル, jsxファイルを対象とする
  }
};
