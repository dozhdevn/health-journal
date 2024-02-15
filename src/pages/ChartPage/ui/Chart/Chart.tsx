'use client'

import React, { useMemo } from 'react'

import { Chart as ReactChart, ChartWrapperOptions } from 'react-google-charts'

interface Props {
  data: any
  title: string
}

function Chart(props: Props) {
  const { data, title } = props

  const options: ChartWrapperOptions['options'] = useMemo(
    () => ({
      backgroundColor: 'transparent',
      legend: 'none',
      colors: ['#FF7E1D'],
      title,
      titleTextStyle: {
        color: '#ffffff',
        fontSize: 14,
      },
      hAxis: {
        gridlines: {
          color: 'transparent',
        },
        textStyle: {
          color: '#898989',
        },
      },
      vAxis: {
        gridlines: {
          color: '#898989',
        },
        textStyle: {
          color: '#898989',
        },
      },
    }),
    [title]
  )

  return (
    <ReactChart
      chartType='ColumnChart'
      width='100%'
      height='250px'
      data={data}
      options={options}
    />
  )
}

export default Chart
