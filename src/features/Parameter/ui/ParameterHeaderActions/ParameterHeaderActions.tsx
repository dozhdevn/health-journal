import React from 'react'
import { Pencil, Save, X, Check } from 'lucide-react'

import { Flex } from '@/shared/ui/components/Flex'

import styles from './ParameterHeaderActions.module.scss'

interface Props {
  isEdit?: boolean
  onCancel?: () => void
  onSave?: () => void
  onEdit?: () => void
}

function ParameterHeaderActions(props: Props) {
  const { isEdit, onCancel, onSave, onEdit } = props
  const actions = isEdit ? (
    <>
      <button onClick={onCancel} className={styles.button}>
        <X size={16} />
      </button>
      <button onClick={onEdit} className={styles.button}>
        <Check size={16} />
      </button>
    </>
  ) : (
    <>
      <button onClick={onSave} className={styles.button}>
        <Save size={16} />
      </button>
      <button onClick={onEdit} className={styles.button}>
        <Pencil size={16} />
      </button>
    </>
  )

  return <Flex className={styles.actions}>{actions}</Flex>
}

export default ParameterHeaderActions
