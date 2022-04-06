import BigJS from 'big.js'

import { ITurnOverFormState } from '../../routes/TurnOverRoute/TurnOverForm/TurnOverForm'
import { IndicatorsEnum } from '../indicators'

import { IAnalisItem } from './liquidityAnalys'

const isReadyForAnalys = (values: ITurnOverFormState) => {
  return (
    values.CURRENT_ASSETS !== '' && values.REVENUE !== '' && values.VB !== ''
  )
}

export const getTurnOverAnalys = (
  values: ITurnOverFormState
): IAnalisItem[] => {
  if (!isReadyForAnalys(values)) return []

  const OSK = new BigJS(values[IndicatorsEnum.INDICATOR_REVENUE])
    .div(values[IndicatorsEnum.INDICATOR_VB])
    .valueOf()
  const OOA = new BigJS(values[IndicatorsEnum.INDICATOR_REVENUE])
    .div(values[IndicatorsEnum.INDICATOR_CURRENT_ASSETS])
    .valueOf()
  const KZ = new BigJS(values[IndicatorsEnum.INDICATOR_CURRENT_ASSETS])
    .div(values[IndicatorsEnum.INDICATOR_REVENUE])
    .valueOf()

  return [
    {
      name: 'Общий коэффициент оборачиваемости совокупного капитала',
      value: OSK,
      color: '',
      helpText:
        'Чем выше значение этого коэффициента, тем быстрее оборачивается капитал, и тем больше прибыли приносит каждый рубль актива организации.',
    },
    {
      name: 'Коэффициент оборачиваемости оборотных активов',
      value: OOA,
      color: '',
      helpText:
        'Максимальные значения коэффициента имеют торговые предприятия, а минимальное – фондоёмкие научные предприятия. Чем выше значение показателя, тем эффективнее используются оборотные активы.',
    },
    {
      name: 'Коэффициент загрузки',
      value: KZ,
      color: '',
      helpText:
        'Чем меньше значение коэффициента загрузки, тем эффективнее работает бизнес, и эффективнее используются оборотные средства.',
    },
  ]
}
