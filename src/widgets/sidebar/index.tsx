import { useState } from 'react'

import cn from 'shared/helpers/class-names'

import { ThemeSwitch } from 'widgets/theme-switch'

import styles from './sidebar.module.scss'
import { LangSwitch } from 'widgets/lang-switch'

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapseToggle = () => {
    setIsCollapsed(prev => !prev)
  }

  return (
    <div className={cn(styles.sidebar, { [styles.collapsed]: isCollapsed })} data-testid="sidebar">
      <button onClick={handleCollapseToggle} data-testid="sidebar-toggle">TOGGLE</button>
      <div className={styles.switches}>
        <ThemeSwitch />
        <LangSwitch />
      </div>
    </div>
  )
}
