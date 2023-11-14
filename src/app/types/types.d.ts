declare module '*.module.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.svg' {
  import { SVGProps, ReactElement } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare const _IS_DEV_MODE_: boolean
