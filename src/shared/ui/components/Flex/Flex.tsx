import { FlexProps } from './types'

import styles from './Flex.module.scss'
import capitalize from '../../__base/utils/capitalize'
import cn from 'classnames'

function Flex<T extends React.ElementType = 'div'>(props: FlexProps<T>) {
  const {
    as: Component = 'div',
    direction = 'row',
    justify = 'center',
    align = 'center',
    wrap = 'nowrap',
    className,
    children,
    ...rest
  } = props

  const directionClassName = styles[`direction${capitalize(direction)}`]
  const justifyClassName = styles[`justify${capitalize(justify)}`]
  const alignClassName = styles[`align${capitalize(align)}`]
  const wrapClassName = styles[wrap]

  const classNames = cn(
    styles.flex,
    directionClassName,
    justifyClassName,
    alignClassName,
    wrapClassName,
    className
  )

  return (
    <Component {...rest} className={classNames}>
      {children}
    </Component>
  )
}

export default Flex
