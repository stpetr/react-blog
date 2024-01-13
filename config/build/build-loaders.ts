import { RuleSetRule } from 'webpack'

import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/build-css-loader'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = buildCssLoader(options.isDevMode)

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
