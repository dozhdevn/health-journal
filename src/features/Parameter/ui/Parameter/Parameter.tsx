import React, { useState } from 'react'
import cn from 'classnames'

import { Size } from '@/features/SizeChange'
import { Flex } from '@/shared/ui/components/Flex'
import { Slider } from '@/shared/ui/components/Slider'
import { Card } from '@/shared/ui/components/Card'

import { ParameterData } from '../../model/types/parameter'
import { ParameterHeader } from '../ParameterHeader'
import { ParameterValue } from '../ParameterValue'

import ParameterLoader from '../ParameterLoader/ParameterLoader'
import { Button } from '@/shared/ui/components/Button'
import { Input } from '@/shared/ui/components/Input'

import { ParameterActions } from '../ParameterActions'
import styles from './Parameter.module.scss'

interface Props {
  data?: ParameterData
  step?: number
  size?: `${Size}`
  readonly?: boolean
  isLoading?: boolean
  onChangeValue?: (value: number) => void
  onSaveValue?: (value: number) => void
  className?: string
}

function Parameter(props: Props) {
  const {
    data,
    size = 'small',
    isLoading,
    readonly,
    step,
    onChangeValue,
    onSaveValue,
    className,
  } = props

  const [isEdit, setisEdit] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const isSmall = size === Size.SMALL

  const changeEditHandler = () => {
    if (isEdit && inputValue) {
      onChangeValue?.(+inputValue)
      setisEdit(prev => !prev)
      setInputValue('')
      return
    }
    setisEdit(prev => !prev)
    setInputValue('')
  }

  const changeValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(+event.target.value)
  }

  const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ввод только чисел и чисел с точкой
    let inputValue = event.target.value
    inputValue = inputValue
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\..*/g, '$1')
    if (inputValue.startsWith('.')) {
      inputValue = inputValue.substring(1)
    }
    setInputValue(inputValue)
  }

  const saveParameterHandler = () => {
    onSaveValue?.(data?.value!)
  }

  const cancelEditHandler = () => {
    setisEdit(false)
    setInputValue('')
  }

  const classNames = cn(styles.parameter, styles[size], className)

  const content = isLoading ? (
    <ParameterLoader />
  ) : (
    <>
      <ParameterHeader
        title={data?.name}
        size={size}
        readonly={readonly}
        isEdit={isEdit}
        onSave={saveParameterHandler}
        onEdit={changeEditHandler}
        onCancel={cancelEditHandler}
      />
      {isEdit ? (
        <Input
          value={inputValue}
          placeholder='Введите значение'
          onChange={changeInputHandler}
          className={styles.input}
        />
      ) : (
        <Flex
          justify={readonly ? 'center' : 'between'}
          direction={isSmall ? 'row' : 'column'}
          className={styles.sliderWrap}
        >
          <ParameterValue value={data?.value} units={data?.units} size={size} />
          {!readonly && (
            <Slider
              value={data?.value}
              max={data?.max_value}
              min={data?.min_value}
              step={step}
              onChange={changeValueHandler}
              className={cn(styles.slider, isSmall && styles.isSmall)}
            />
          )}
        </Flex>
      )}

      {!isSmall && !readonly && (
        <ParameterActions
          isEdit={isEdit}
          onEdit={changeEditHandler}
          onCancel={cancelEditHandler}
          onSave={saveParameterHandler}
        />
      )}
    </>
  )

  return (
    <Flex
      as={Card}
      direction='column'
      justify={readonly ? 'center' : 'between'}
      align={isSmall ? 'start' : 'center'}
      className={classNames}
    >
      {content}
    </Flex>
  )
}

export default Parameter
