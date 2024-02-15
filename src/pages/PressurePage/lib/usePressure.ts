import { useChartStore } from "@/features/ChartStore"
import { useDiastolicPressure } from "../model/diastolicPressure"
import { useSystolicPressure } from "../model/systolicPressure"

export const usePressure = () => {
  const diastolicData = useDiastolicPressure(state => state.data)
  const systolicData = useSystolicPressure(state => state.data)

  const onChangeDiastolicValue = useDiastolicPressure(
    state => state.changeValue
  )

  const onChangeSystolicValue = useSystolicPressure(
    state => state.changeValue
  )

  const onSaveDiastolicValue = useChartStore(state => state.addDiastolic)

  const onSaveSystolicValue = useChartStore(state => state.addSystolic)

  return {
    diastolicData,
    systolicData,
    onChangeDiastolicValue,
    onSaveDiastolicValue,
    onChangeSystolicValue,
    onSaveSystolicValue,
  }

}