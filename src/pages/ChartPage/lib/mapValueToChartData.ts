
export const mapValueToChartData = (data: number[], prefix: string) => {
  return [['', ''], ...data.map(value => [`${value} ${prefix}`, value])]
}
