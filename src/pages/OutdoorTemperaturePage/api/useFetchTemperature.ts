import axios, { AxiosError } from 'axios'
import useSWR from 'swr'
import { WeatherDataDto } from '../model/types'
import { mapWeatherDtoToParameterData } from '../lib/mapWeatherDtoToParameterData'
import { ParameterData } from '@/features/Parameter'

const key = process.env.NEXT_PUBLIC_PRIVATE_KEY

export const fetchTemperature = async () => {
  console.log(key)
  const { data } = await axios.get<WeatherDataDto>(
    'http://api.weatherapi.com/v1/current.json',
    {
      params: {
        key,
        q: 'Moscow',
        qi: 'no',
      },
    }
  )

  return mapWeatherDtoToParameterData(data)
}

export const useFetchTemperature = () =>
  useSWR<ParameterData, AxiosError>('/api/weather', fetchTemperature)
