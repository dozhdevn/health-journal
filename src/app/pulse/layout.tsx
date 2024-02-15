import { IndicatorsLayout } from '@/widgets/layouts/IndicatorsLayout'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <IndicatorsLayout title='Просмотр и изменение показателей пульса'>
      {children}
    </IndicatorsLayout>
  )
}

export default layout
