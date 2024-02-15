import { Header } from '@/widgets/header'
import React from 'react'

function BaseLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default BaseLayout
