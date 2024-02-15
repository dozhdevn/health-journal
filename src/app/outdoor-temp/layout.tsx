import { IndicatorsLayout } from '@/widgets/layouts/IndicatorsLayout'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <IndicatorsLayout title='Просмотр показателя температуры на улице'>
      {children}
    </IndicatorsLayout>
  )
}

export default layout
