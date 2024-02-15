import { LucideIcon } from 'lucide-react'
import { PolimorficComponentWithoutRef } from '../../__base/types/polymorfic'

interface BaseButtonProps {
  icon?: LucideIcon
}

export type ButtonProps<Component extends React.ElementType> =
  PolimorficComponentWithoutRef<Component, BaseButtonProps>
