import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'

import cn from 'shared/helpers/class-names'

import styles from './modal.module.scss'
import { Portal } from 'shared/ui/portal'

type ModalProps = {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const TOGGLE_ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props

  const [isClosing, setIsClosing] = useState(false)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>()

  const handleClose = useCallback(() => {
    setIsClosing(true)
    timeoutIdRef.current = setTimeout(() => {
      setIsClosing(false)
      onClose?.()
    }, TOGGLE_ANIMATION_DELAY)
  }, [onClose])

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      clearTimeout(timeoutIdRef.current)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, isOpen])

  const mods: Record<string, boolean> = {
    [styles.open]: !!isOpen,
    [styles.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div className={cn(styles.modal, mods, className)}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={handleContentClick}>{children}</div>
        </div>
      </div>
    </Portal>
  )
}
