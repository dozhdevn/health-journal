'use client'

import React from 'react'

import { useChartStore } from '@/features/ChartStore'
import { ParameterWithSize } from '@/widgets/ParameterWithSize'

import { usePulse } from '../lib/usePulse'

function PulsePage() {
  const { data, onChangeValue } = usePulse()
  const { addPulse } = useChartStore()

  return (
    <ParameterWithSize
      data={data}
      onChangeValue={onChangeValue}
      onSaveValue={addPulse}
    />
  )
}

export default PulsePage
