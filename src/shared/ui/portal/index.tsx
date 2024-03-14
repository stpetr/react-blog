import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = {
  children: ReactNode
  container?: HTMLElement
}
export const Portal: FC<PortalProps> = (props) => {
  const {
    children,
    container = document.body,
  } = props

  return createPortal(children, container)
}
