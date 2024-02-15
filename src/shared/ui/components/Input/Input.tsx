import React from 'react'
import cn from 'classnames'

import styles from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  const { className, ...rest } = props
  return <input {...rest} className={cn(styles.input, className)} />
}

export default Input
