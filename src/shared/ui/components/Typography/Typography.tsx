import React from 'react'
import cn from 'classnames'

import { TypographyProps } from './types'

import styles from './Typography.module.scss'

function Typography<T extends React.ElementType>(props: TypographyProps<T>) {
  const {
    as: Component = 'span',
    size = 'm',
    weight = 'regular',
    center,
    children,
    className,
  } = props

  const classNames = cn(
    styles.typography,
    styles[`size-${size}`],
    styles[`${weight}`],
    center && styles.center,
    className
  )

  return <Component className={classNames}>{children}</Component>
}

export default Typography
