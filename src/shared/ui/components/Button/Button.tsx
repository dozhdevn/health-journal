import React from 'react'
import cn from 'classnames'

import { ButtonProps } from './types'

import styles from './Button.module.scss'

function Button<T extends React.ElementType>(props: ButtonProps<T>) {
  const {
    as: Component = 'button',
    icon: Icon,
    children,
    className,
    ...rest
  } = props

  return (
    <Component className={cn(styles.button, className)} {...rest}>
      {Icon && <Icon size={16} />}
      {children}
    </Component>
  )
}

export default Button
