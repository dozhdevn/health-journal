'use client'

import React from 'react'

import { SizeChange, useSize } from '@/features/SizeChange'
import { Flex } from '@/shared/ui/components/Flex'

import Parameter from '@/features/Parameter/ui/Parameter'
import { usePressure } from '../../lib/usePressure'

import styles from './PressurePage.module.scss'

function PressurePage() {
  const {
    diastolicData,
    systolicData,
    onChangeDiastolicValue,
    onSaveDiastolicValue,
    onChangeSystolicValue,
    onSaveSystolicValue,
  } = usePressure()

  const { size, handleChangeSize } = useSize()

  return (
    <>
      <SizeChange value={size} onChange={handleChangeSize} />
      <Flex className={styles.info} align='start'>
        <Parameter
          size={size}
          data={diastolicData}
          onChangeValue={onChangeDiastolicValue}
          onSaveValue={onSaveDiastolicValue}
        />
        <Parameter
          size={size}
          data={systolicData}
          onChangeValue={onChangeSystolicValue}
          onSaveValue={onSaveSystolicValue}
        />
      </Flex>
    </>
  )
}

export default PressurePage
