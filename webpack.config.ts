import path from 'path'

import { buildWebpackConfig } from './config/build/build-webpack-config'

import { BuildMode, BuildPaths } from './config/build/types/config'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}
const mode: BuildMode = 'development';
const isDevMode = mode === 'development';

const config = buildWebpackConfig({
  mode,
  paths,
  isDevMode,
});

export default config
