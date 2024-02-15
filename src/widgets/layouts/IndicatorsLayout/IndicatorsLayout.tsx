import React from 'react'
import { Flex } from '@/shared/ui/components/Flex'

import { Typography } from '@/shared/ui/components/Typography'

import styles from './IndicatorsLayout.module.scss'

interface Props {
  title?: string
}

function IndicatorsLayout({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <Flex as='section' direction='column' className={styles.layout}>
      <Flex className={styles.content} direction='column'>
        <Typography as='h1' size='xl' weight='bold' center>
          {title}
        </Typography>
        <Flex direction='column' justify='start' className={styles.wrapper}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default IndicatorsLayout
