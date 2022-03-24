const WebpackObfuscator = require('webpack-obfuscator')

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true,
          },
        },
      },
    ],
    plugins: [
      new WebpackObfuscator(
        {
          rotateStringArray: true,
        },
        ['excluded_bundle_name.js']
      ),
    ],
  },
}
