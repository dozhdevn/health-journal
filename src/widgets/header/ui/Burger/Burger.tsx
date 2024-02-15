'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { NavigationList } from '../NavigationList'

import styles from './Burger.module.scss'

function Burger() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => {
    setIsOpen(prev => !prev)
  }

  const closeHandler = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.burger}>
      <button onClick={toggleHandler} className={styles.button}>
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <NavigationList className={styles.menu} onClick={closeHandler} />
      )}
    </div>
  )
}

export default Burger
