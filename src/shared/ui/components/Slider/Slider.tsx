import React, { useMemo } from 'react'
import cn from 'classnames'

import styles from './Slider.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  step?: number
  max?: number
  min?: number
  value?: number
  className?: string
}

function Slider(props: Props) {
  const {
    name,
    className,
    step = 1,
    max = 100,
    min = 0,
    value = 0,
    ...rest
  } = props

  const percentage: number = useMemo(() => {
    if (value < min) {
      return 0
    }

    if (value > max) {
      return 100
    }

    return ((value - min) / (max - min)) * 100
  }, [value, min, max])

  return (
    <div className={cn(styles.slider, className)}>
      <input
        name={name}
        type='range'
        value={value}
        className={styles.input}
        max={max}
        min={min}
        step={step}
        {...rest}
      />
      <div className={styles.track} />
      <div
        className={styles.thumb}
        style={{
          left: `calc(${percentage}% - ${(10 * (percentage || 0)) / 100}px)`,
        }}
      />
      <div
        className={styles.fill}
        style={{
          width: `calc(${percentage}% - ${(8 * (percentage || 0)) / 100}px)`,
        }}
      />
    </div>
  )
}

export default Slider
