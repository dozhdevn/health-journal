export type LocationDto = {
  name: string
  region: string
  country: string
  lat: number
  lon: number
  tz_id: string
  localtime_epoch: number
  localtime: string
}

export type ConditionDto = {
  text: string
  icon: string
  code: number
}

export type CurrentDto = {
  last_updated_epoch: number
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: number
  condition: ConditionDto
}

export type WeatherDataDto = {
  location: LocationDto
  current: CurrentDto
}
