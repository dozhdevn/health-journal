import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { CreateParameter, ParameterData } from '@/features/Parameter'

interface PulseStore {
  data: ParameterData
  changeValue: (value: number) => void
}

const initialState = new CreateParameter('Пульс', 90, 'уд./мин.', 180, 40, true)

export const usePulseStore = create<PulseStore>()(
  immer(set => ({
    data: { ...initialState },
    changeValue: (value: number) =>
      set(state => {
        state.data.value = value
      }),
  }))
)
