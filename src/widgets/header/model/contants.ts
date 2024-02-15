import { paths } from '@/shared/config/routing'
import { HeaderLink } from './types'

export const headerLinks: HeaderLink[] = [
  {
    href: paths.pressure,
    label: 'Давление',
  },
  {
    href: paths.pulse,
    label: 'Пульс',
  },
  {
    href: paths.temperature,
    label: 'Температура',
  },
  {
    href: paths.outdoor_temp,
    label: 'Температура на улице',
  },
  {
    href: paths.chart,
    label: 'Графики',
  },
]
