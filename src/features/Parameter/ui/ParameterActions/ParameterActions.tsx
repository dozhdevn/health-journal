import React from 'react'

import styles from './ParameterActions.module.scss'
import { Pencil, Save, X } from 'lucide-react'
import { Flex } from '@/shared/ui/components/Flex'
import { Button } from '@/shared/ui/components/Button'
import { Typography } from '@/shared/ui/components/Typography'

interface Props {
  isEdit?: boolean
  onEdit?: () => void
  onSave?: () => void
  onCancel?: () => void
}

function ParameterActions(props: Props) {
  const { isEdit, onEdit, onSave, onCancel } = props

  return (
    <Flex justify='between'>
      <Button
        icon={isEdit ? X : Save}
        className={styles.button}
        onClick={isEdit ? onCancel : onSave}
      >
        <Typography size='s'>{isEdit ? 'Отменить' : 'Сохранить'}</Typography>
      </Button>
      <Button
        icon={Pencil}
        className={styles.button}
        onClick={onEdit}
      >
        <Typography size='s'>Изменить</Typography>
      </Button>
    </Flex>
  )
}

export default ParameterActions
