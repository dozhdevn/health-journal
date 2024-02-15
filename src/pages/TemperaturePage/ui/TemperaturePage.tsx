'use client'

import React from 'react'

import { useChartStore } from '@/features/ChartStore'
import { ParameterWithSize } from '@/widgets/ParameterWithSize'

import { useTemperature } from '../lib/useTemperature'

function TemperaturePage() {
  const { data, onChangeValue } = useTemperature()

  const { addTemperature } = useChartStore()

  return (
    <ParameterWithSize
      data={data}
      step={0.1}
      onChangeValue={onChangeValue}
      onSaveValue={addTemperature}
    />
  )
}

export default TemperaturePage
