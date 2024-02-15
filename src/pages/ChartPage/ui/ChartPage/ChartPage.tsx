'use client'

import React from 'react'

import { useChartStore } from '@/features/ChartStore/model/chart'
import { mapValueToChartData } from '../../lib/mapValueToChartData'
import { Chart } from '../Chart'
import { Flex } from '@/shared/ui/components/Flex'

import styles from './ChartPage.module.scss'

function ChartPage() {
  const { diastolic, systolic, pulse, temperature } = useChartStore()

  const diastolicData = mapValueToChartData(diastolic, 'мм. рт. ст.')
  const systolicData = mapValueToChartData(systolic, 'мм. рт. ст.')
  const pulseData = mapValueToChartData(pulse, 'уд./мин.')
  const temperatureData = mapValueToChartData(temperature, '°C')

  return (
    <Flex direction='column' className={styles.root}>
      <Chart
        data={diastolicData}
        title='История изменения диастолического давления'
      />
      <Chart
        data={systolicData}
        title='История изменения систолическое давления'
      />
      <Chart data={pulseData} title='История изменения пульса' />
      <Chart data={temperatureData} title='История изменения температуры' />
    </Flex>
  )
}

export default ChartPage
