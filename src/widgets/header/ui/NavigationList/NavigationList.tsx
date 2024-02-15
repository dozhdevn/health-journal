'use client'

import React from 'react'

import { Flex } from '@/shared/ui/components/Flex'
import { headerLinks } from '../../model/contants'
import { NavigationLink } from '../NavigationLink'
import { usePathname } from 'next/navigation'

import styles from './NavigationList.module.scss'

function NavigationList({
  onClick,
  className,
}: {
  onClick?: () => void
  className?: string
}) {
  const pathname = usePathname()

  return (
    <nav className={className}>
      <Flex as='ul' className={styles.list}>
        {headerLinks.map(({ href, label }) => {
          const isActive = pathname === href

          return (
            <li key={href}>
              <NavigationLink href={href} isActive={isActive} onClick={onClick}>
                {label}
              </NavigationLink>
            </li>
          )
        })}
      </Flex>
    </nav>
  )
}

export default NavigationList
