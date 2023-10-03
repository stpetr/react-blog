import path from 'path'

import { buildWebpackConfig } from './config/build/build-webpack-config'

import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }
  const mode: BuildMode = env.mode ?? 'development'
  const port = env.port ?? 3000
  const isDevMode = mode === 'development'

  return buildWebpackConfig({
    mode,
    paths,
    isDevMode,
    port,
  })
}
