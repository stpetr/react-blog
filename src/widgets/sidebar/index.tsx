import { FC, useState } from 'react'

import cn from 'shared/helpers/class-names'

import { ThemeSwitch } from 'widgets/theme-switch'

import styles from './sidebar.module.scss'

type SidebarProps = {}

export const Sidebar: FC<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={cn(styles.sidebar, {[styles.collapsed]: isCollapsed})}>
      <button onClick={handleCollapseToggle}>Toggle</button>
      <div className={styles.switches}>
        <ThemeSwitch />
      </div>
    </div>
  )
}
