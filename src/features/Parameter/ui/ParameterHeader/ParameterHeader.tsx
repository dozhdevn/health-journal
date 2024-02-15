import React from 'react'
import { Pencil, Save, X, Check } from 'lucide-react'
import cn from 'classnames'

import { Size } from '@/features/SizeChange'
import { Flex } from '@/shared/ui/components/Flex'
import { Typography } from '@/shared/ui/components/Typography'

import { ParameterHeaderActions } from '../ParameterHeaderActions'
import styles from './ParameterHeader.module.scss'

interface Props {
  size: `${Size}`
  title?: string
  readonly?: boolean
  isEdit?: boolean
  onSave?: () => void
  onEdit?: () => void
  onCancel?: () => void
}

function ParameterHeader(props: Props) {
  const {
    size,
    title = '',
    isEdit,
    readonly = false,
    onSave,
    onEdit,
    onCancel,
  } = props

  if (size === Size.SMALL) {
    return (
      <Flex className={styles.header} justify={readonly ? 'center' : 'between'}>
        <Typography
          weight='bold'
          className={cn(styles.title, styles.smallTitle)}
        >
          {title}
        </Typography>
        {!readonly && (
          <ParameterHeaderActions
            isEdit={isEdit}
            onSave={onSave}
            onEdit={onEdit}
            onCancel={onCancel}
          />
        )}
      </Flex>
    )
  }

  return (
    <Typography weight='bold' size='l' center className={styles.title}>
      {title}
    </Typography>
  )
}

export default ParameterHeader
