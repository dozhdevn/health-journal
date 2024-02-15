import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { CreateParameter, ParameterData } from '@/features/Parameter'

interface TemperatureStore {
  data: ParameterData
  changeValue: (value: number) => void
}

const initialState = new CreateParameter(
  'Температура',
  36.6,
  '°C',
  42,
  35,
  true
)

export const usePulseStore = create<TemperatureStore>()(
  immer(set => ({
    data: { ...initialState },
    changeValue: (value: number) =>
      set(state => {
        state.data.value = value
      }),
  }))
)
