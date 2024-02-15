export type AsProp<Component extends React.ElementType, Props = {}> = {
  as?: Component
} & Props

export type BasePropsWithAs<
  Component extends React.ElementType,
  Props = {}
> = AsProp<Component, Props>

export type PolimorficComponentWithoutRef<
  Component extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<BasePropsWithAs<Component, Props>> &
  Omit<
    React.ComponentPropsWithoutRef<Component>,
    keyof BasePropsWithAs<Component, Props>
  >
