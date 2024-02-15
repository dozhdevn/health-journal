import { create } from 'zustand'
import { mockedTemperatureData } from '../mock/temperature'
import { mockedPulseData } from '../mock/pulse'
import {
  mockedDiastolicPressureData,
  mockedSystolicPressureData,
} from '../mock/pressure'

interface CharStore {
  diastolic: number[]
  systolic: number[]
  pulse: number[]
  temperature: number[]
  addDiastolic: (value: number) => void
  addSystolic: (value: number) => void
  addPulse: (value: number) => void
  addTemperature: (value: number) => void
}

export const useChartStore = create<CharStore>(set => ({
  diastolic: [...mockedDiastolicPressureData],
  systolic: [...mockedSystolicPressureData],
  pulse: [...mockedPulseData],
  temperature: [...mockedTemperatureData],
  addDiastolic: (value: number) =>
    set(state => ({ diastolic: [...state.diastolic, value] })),
  addSystolic: (value: number) =>
    set(state => ({ systolic: [...state.systolic, value] })),
  addPulse: (value: number) =>
    set(state => ({ pulse: [...state.pulse, value] })),
  addTemperature: (value: number) =>
    set(state => ({ temperature: [...state.temperature, value] })),
}))
