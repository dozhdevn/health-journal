import { usePulseStore } from '../model/temperature'

export const useTemperature = () => {
  const data = usePulseStore(state => state.data)
  const onChangeValue = usePulseStore(state => state.changeValue)

  return {
    data,
    onChangeValue,
  }
}
