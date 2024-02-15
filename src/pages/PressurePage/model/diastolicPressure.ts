import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { ParameterData, CreateParameter } from '@/features/Parameter'

interface DiastolicPressureStore {
  data: ParameterData
  changeValue: (value: number) => void
}

const initialState = new CreateParameter(
  'Диастолическое давление',
  120,
  'мм. рт. ст.',
  350,
  50,
  true
)

export const useDiastolicPressure = create<DiastolicPressureStore>()(
  immer(set => ({
    data: { ...initialState },
    changeValue: (value: number) =>
      set(state => {
        state.data.value = value
      }),
  }))
)
