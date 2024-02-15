import { useState } from 'react'
import { Size } from '../model/constants'

export const useSize = () => {
  const [size, setSize] = useState(Size.SMALL)

  const handleChangeSize = (value: Size) => {
    setSize(value)
  }

  return {
    size,
    handleChangeSize,
  }

}
