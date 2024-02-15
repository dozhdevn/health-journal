import React from 'react'

import { Flex } from '@/shared/ui/components/Flex'
import { RadioButton } from '@/shared/ui/components/RadioButton'
import { Size, sizeConfig } from '../../model/constants'

import styles from './SizeChange.module.scss'

interface Props {
  value?: Size
  onChange?: (value: Size) => void
}

function ChangeSize(props: Props) {
  const { value, onChange } = props

  return (
    <Flex className={styles.root}>
      {sizeConfig.map(({ label, value: sizeValue }) => {
        return (
          <RadioButton
            key={sizeValue}
            label={label}
            value={sizeValue}
            checked={value === sizeValue}
            onChange={onChange}
          />
        )
      })}
    </Flex>
  )
}

export default ChangeSize
