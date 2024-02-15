'use client'

import React from 'react'

import { SizeChange, useSize } from '@/features/SizeChange'
import { Parameter } from '@/features/Parameter'

import { useFetchTemperature } from '../api/useFetchTemperature'
import { Typography } from '@/shared/ui/components/Typography'

function OutdoorTemperaturePage() {
  const { data, isLoading, error } = useFetchTemperature()

  const { size, handleChangeSize } = useSize()

  if (error) {
    return <Typography>{error.message}</Typography>
  }

  return (
    <>
      <SizeChange value={size} onChange={handleChangeSize} />
      <Parameter size={size} data={data} readonly isLoading={isLoading} />
    </>
  )
}

export default OutdoorTemperaturePage
