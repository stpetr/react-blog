import webpack from 'webpack'

import { buildLoaders } from './build-loaders'
import { buildResolvers } from './build-resolvers'
import { buildPlugins } from './build-plugins'
import { buildDevServer } from './build-dev-server'

import { BuildOptions } from './types/config'

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {mode, paths, isDevMode} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDevMode ? 'inline-source-map' : undefined,
    devServer: isDevMode ? buildDevServer(options) : undefined,
  }
}
