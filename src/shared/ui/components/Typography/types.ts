import { PolimorficComponentWithoutRef } from '../../__base/types/polymorfic'
import { TypographySize, TypographyWeight } from './constants'

export type TypographySizes = `${TypographySize}`
export type TypographyWeights = `${TypographyWeight}`

interface BaseTypographyProps {
  size?: TypographySizes
  weight?: TypographyWeights
  center?: boolean
}

export type TypographyProps<Component extends React.ElementType> =
  PolimorficComponentWithoutRef<Component, BaseTypographyProps>
