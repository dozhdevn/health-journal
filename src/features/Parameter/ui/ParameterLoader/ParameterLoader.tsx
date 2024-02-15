import React from 'react'

import styles from './ParameterLoader.module.scss'
import { Flex } from '@/shared/ui/components/Flex'
import { Loader } from 'lucide-react'

function ParameterLoader() {
  return (
    <Flex className={styles.loader}>
      <Loader size={20} className={styles.loaderIcon} />
    </Flex>
  )
}

export default ParameterLoader
