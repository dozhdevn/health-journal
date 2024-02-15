import { usePulseStore } from '../model/pulse'

export const usePulse = () => {
  const data = usePulseStore(state => state.data)
  const onChangeValue = usePulseStore(state => state.changeValue)

  return {
    data,
    onChangeValue,
  }
}
