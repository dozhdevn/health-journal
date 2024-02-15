import { Flex } from '@/shared/ui/components/Flex'
import styles from './Header.module.scss'
import { NavigationList } from '../NavigationList'
import { Burger } from '../Burger'

function Header() {
  return (
    <Flex as='header' className={styles.header}>
      <NavigationList className={styles.list}/>
      <Burger />
    </Flex>
  )
}

export default Header
