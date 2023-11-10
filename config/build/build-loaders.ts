import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { BuildOptions } from './types/config'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.scss$/i,
    use: [
      options.isDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.s?css$/i,
            localIdentName: options.isDevMode ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
            exportLocalsConvention: 'camelCase',
          },
        }
      },
      'sass-loader',
    ],
  }

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.png|jp?eg|gif$/i,
    use: ['file-loader'],
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}
