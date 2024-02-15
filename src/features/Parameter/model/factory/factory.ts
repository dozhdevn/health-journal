export class CreateParameter {
  name: string
  value: number
  units: string
  max_value: number
  min_value: number
  allow_edit: boolean

  constructor(
    name: string,
    value: number,
    units: string,
    max_value: number,
    min_value: number,
    allow_edit: boolean
  ) {
    this.name = name
    this.value = value
    this.units = units
    this.max_value = max_value
    this.min_value = min_value
    this.allow_edit = allow_edit
  }
}
