import path from 'path'

import { Configuration, RuleSetRule } from 'webpack'

import { BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/build-css-loader'

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '../../src'),
  }

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')
  config.module?.rules?.push(buildCssLoader(true))

  // @ts-ignore
  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module?.rules?.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  })

  return config
}
