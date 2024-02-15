'use client'

import React, { useId } from 'react'
import cn from 'classnames'

import { Typography } from '../Typography'

import styles from './RadioButton.module.scss'

type HTMLRadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
>

interface Props<T = string> extends HTMLRadioProps {
  onChange?: (value: T) => void
  value?: T
  label?: string
}

function RadioButton<T>(props: Props<T>) {
  const { value, label, onChange, className, ...rest } = props

  const id = useId()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value as T)
  }

  return (
    <label htmlFor={id} className={cn(styles.radioButton, className)}>
      <input
        {...rest}
        id={id}
        type='radio'
        value={value as string}
        onChange={handleChange}
        className={styles.input}
      />
      <span className={styles.radio} />
      <Typography size='s' weight='bold'>
        {label}
      </Typography>
    </label>
  )
}

export default RadioButton
