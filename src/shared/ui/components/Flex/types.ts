import { PolimorficComponentWithoutRef } from '../../__base/types/polymorfic'
import { FlexDirection, FlexJustify, FlexAlign, FlexWrap } from './constants'

export type FlexDirections = `${FlexDirection}`
export type FlexJustifies = `${FlexJustify}`
export type FlexAligns = `${FlexAlign}`
export type FlexWraps = `${FlexWrap}`

interface BaseFlexProps {
  direction?: FlexDirections
  justify?: FlexJustifies
  align?: FlexAligns
  wrap?: FlexWraps
}

export type FlexProps<Component extends React.ElementType> =
  PolimorficComponentWithoutRef<Component, BaseFlexProps>
