import React from 'react'

import { Size } from '@/features/SizeChange'
import { Flex } from '@/shared/ui/components/Flex'
import { Typography } from '@/shared/ui/components/Typography'

import styles from './ParameterValue.module.scss'

interface Props {
  size: `${Size}`
  value?: number
  units?: string
}

function ParameterValue(props: Props) {
  const { size, value, units } = props

  if (size === Size.SMALL) {
    return (
      <Flex className={styles.root}>
        <Typography size='l'>{value}</Typography>
        <Typography>{units}</Typography>
      </Flex>
    )
  }

  return (
    <Flex direction='column'>
      <Typography size='xl'>{value}</Typography>
      <Typography>{units}</Typography>
    </Flex>
  )
}

export default ParameterValue
