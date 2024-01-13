import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildCssLoader = (isDevMode: boolean) => ({
  test: /\.scss$/i,
  use: [
    isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: /\.module\.s?css$/i,
          localIdentName: isDevMode ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          exportLocalsConvention: 'camelCase',
        },
      }
    },
    'sass-loader',
  ],
})
