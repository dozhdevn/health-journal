import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { ParameterData, CreateParameter } from '@/features/Parameter'

interface DiastolicPressureStore {
  data: ParameterData
  changeValue: (value: number) => void
}

const initialState = new CreateParameter(
  'Систолическое давление',
  80,
  'мм. рт. ст.',
  100,
  60,
  true
)

export const useSystolicPressure = create<DiastolicPressureStore>()(
  immer(set => ({
    data: { ...initialState },
    changeValue: (value: number) =>
      set(state => {
        state.data.value = value
      }),
  }))
)
