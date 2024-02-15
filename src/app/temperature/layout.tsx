import { IndicatorsLayout } from '@/widgets/layouts/IndicatorsLayout'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <IndicatorsLayout title='Просмотр и изменение показателей температуры'>
      {children}
    </IndicatorsLayout>
  )
}

export default layout
