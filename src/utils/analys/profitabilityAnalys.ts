import BigJs from 'big.js'

import { IProfitabilityFormState } from '../../routes/ProfitabilityRoute/ProfitabilityForm/ProfitabilityForm'
import { IndicatorsEnum } from '../indicators'
import { IAnalisItem } from './liquidityAnalys'

const isReadyForAnalys = (values: IProfitabilityFormState) => {
  return (
    values.CLEAR_PROFIT !== '' &&
    values.EQUITY !== '' &&
    values.LTD !== '' &&
    values.OTHER_EXPENSES !== '' &&
    values.PRIME_COST !== '' &&
    values.REVENUE !== '' &&
    values.VB !== ''
  )
}

export const getProfitabilityAnalys = (
  values: IProfitabilityFormState
): IAnalisItem[] => {
  if (!isReadyForAnalys(values)) return []

  const ROA = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]).div(
    values[IndicatorsEnum.INDICATOR_VB]
  )
  const ROS = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]).div(
    values[IndicatorsEnum.INDICATOR_REVENUE]
  )
  const ROCC = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]).div(
    new BigJs(values[IndicatorsEnum.INDICATOR_PRIME_COST]).add(
      new BigJs(values[IndicatorsEnum.INDICATOR_OTHER_EXPENSES])
    )
  )
  const ROE = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]).div(
    new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY])
  )
  const ROI = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]).div(
    new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY]).add(
      new BigJs(values[IndicatorsEnum.INDICATOR_LTD])
    )
  )

  return [
    {
      name: 'Рентабельность активов (ROA)',
      value: ROA.valueOf(),
      helpText:
        'Анализ необходимо проводить в динамике, значение показателя за текущий период сравниваются со значениями показателя за предыдущий и предшествующий периоды. Увеличение показателя в динамике служит позитивным фактором.',
      color: '',
    },
    {
      name: 'Рентабельность продаж (ROS)',
      value: ROS.valueOf(),
      helpText:
        'Анализ необходимо проводить в динамике, значение показателя за текущий период сравниваются со значениями показателя за предыдущий и предшествующий периоды. Увеличение показателя в динамике служит позитивным фактором.',
      color: '',
    },
    {
      name: 'Рентабельность текущих затрат (ROCC)',
      value: ROCC.valueOf(),
      helpText:
        'Анализ необходимо проводить в динамике, значение показателя за текущий период сравниваются со значениями показателя за предыдущий и предшествующий периоды. Увеличение показателя в динамике служит позитивным фактором.',
      color: '',
    },
    {
      name: 'Рентабельность собственного капитала (ROE)',
      value: ROE.valueOf(),
      helpText:
        'Анализ необходимо проводить в динамике, значение показателя за текущий период сравниваются со значениями показателя за предыдущий и предшествующий периоды. Увеличение показателя в динамике служит позитивным фактором.',
      color: '',
    },
    {
      name: 'Рентабельность инвестиций (ROI)',
      value: ROI.valueOf(),
      helpText:
        'Анализ необходимо проводить в динамике, значение показателя за текущий период сравниваются со значениями показателя за предыдущий и предшествующий периоды. Увеличение показателя в динамике служит позитивным фактором.',
      color: '',
    },
  ]
}
