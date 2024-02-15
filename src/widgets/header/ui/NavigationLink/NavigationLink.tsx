import cn from 'classnames'
import Link, { LinkProps } from 'next/link'
import React from 'react'

import styles from './NavigationLink.module.scss'

interface Props extends LinkProps {
  isActive: boolean
  className?: string
}

function NavigationLink(props: React.PropsWithChildren<Props>) {
  const { isActive, children, className, ...rest } = props

  const classNames = cn(styles.link, isActive && styles.active, className)

  return (
    <Link {...rest} className={classNames}>
      {children}
    </Link>
  )
}

export default NavigationLink
