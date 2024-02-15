import React from 'react'
import { SizeChange, useSize } from '@/features/SizeChange'
import { Parameter, ParameterData } from '@/features/Parameter'

interface Props {
  data?: ParameterData
  step?: number
  onChangeValue?: (value: number) => void
  onSaveValue?: (value: number) => void
}

function ParameterWithSize(props: Props) {
  const { size, handleChangeSize } = useSize()

  return (
    <>
      <SizeChange value={size} onChange={handleChangeSize} />
      <Parameter size={size} {...props} />
    </>
  )
}

export default ParameterWithSize
