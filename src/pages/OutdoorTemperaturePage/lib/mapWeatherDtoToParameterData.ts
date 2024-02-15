import { ParameterData } from '@/features/Parameter'
import { WeatherDataDto } from '../model/types'

export const mapWeatherDtoToParameterData = (
  data: WeatherDataDto
): ParameterData => {
  return {
    name: 'Температура',
    value: data.current.temp_c,
    units: '°C',
  }
}
