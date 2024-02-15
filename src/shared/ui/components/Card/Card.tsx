import React from 'react'

import cn from 'classnames'

import styles from './Card.module.scss'
import { PolimorficComponentWithoutRef } from '../../__base/types/polymorfic'

function Card<T extends React.ElementType = 'div'>(
  props: PolimorficComponentWithoutRef<T>
) {
  const { as: Component = 'div', children, className, ...rest } = props

  return (
    <Component {...rest} className={cn(styles.card, className)}>{children}</Component>
  )
}

export default Card
