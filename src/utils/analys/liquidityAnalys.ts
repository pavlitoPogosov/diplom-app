import BigJS from 'big.js'

import { ILiquidityFormState } from '../../routes/LiquidityRoute/LiquidityForm/LiquidityForm'
import { IndicatorsEnum } from '../indicators'
import { getHelpInfo } from './getHelpInfo'

const isReadyForAnalys = (values: ILiquidityFormState) => {
  return (
    values.CURRENT_ASSETS !== '' &&
    values.ACCOUNTS_RECEIVABLE !== '' &&
    values.BANKROLL !== '' &&
    values.EQUITY !== '' &&
    values.FIXED_ASSETS !== '' &&
    values.SFI !== '' &&
    values.STO
  )
}
export interface IAnalisItem {
  helpText: string
  color: string
  name: string
  value: string
}

export const getLiquidityAnalis = (
  values: ILiquidityFormState
): IAnalisItem[] => {
  if (!isReadyForAnalys(values)) return []

  const QA = new BigJS(values[IndicatorsEnum.INDICATOR_CURRENT_ASSETS] || 1)

  const DS = new BigJS(values[IndicatorsEnum.INDICATOR_BANKROLL])
  const KFV = new BigJS(values[IndicatorsEnum.INDICATOR_SFI])
  const KO = new BigJS(values[IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE])
  const DZ = new BigJS(values[IndicatorsEnum.INDICATOR_STO])

  const AL = DS.add(KFV).div(KO).valueOf()
  const UL = DS.add(KFV).add(DZ).div(KO).valueOf()
  const CL = QA.div(KO).valueOf()

  const WCR = new BigJS(values[IndicatorsEnum.INDICATOR_EQUITY] || 1)
    .minus(new BigJS(values[IndicatorsEnum.INDICATOR_FIXED_ASSETS]))
    .div(new BigJS(values[IndicatorsEnum.INDICATOR_CURRENT_ASSETS]))
    .valueOf()

  const ALHelpInfo = getHelpInfo(AL, 0.2, 0.5, {
    normal:
      'Показатель абсолютной ликвидности соответствует пороговому значению, таким образом организация способна погасить до половины своих текущих обязательств в установленный срок за счет высоколиквидных активов.',
    minimal:
      'Показатель абсолютной ликвидности ниже порогового значения, таким образом, у организации не хватает высоколиквидных активов для расчета с текущими обязательствами.',
    maximal:
      'Показатель абсолютной ликвидности выше порогового значения, таким образом, у организации есть свободные денежные средства, а также краткосрочные финансовые вложения, которые не приносят доход.',
  })
  const ULHelpInfo = getHelpInfo(UL, 0.6, 0.8, {
    normal:
      'Показатель срочной ликвидности соответствует пороговому значению, таким образом, организация способна погасить свои текущие обязательства за счет высоколиквидных и быстроликвидных активов.',
    minimal:
      'Показатель срочной ликвидности ниже порогового значения, таким образом, организация не способна погасить свои текущие обязательства за счет высоколиквидных и быстроликвидных активов, несоответствие норме может быть критичным для организации.',
    maximal:
      'Показатель срочной ликвидности выше порогового значения, таким образом, величина высоколиквидных и быстроликвидных активов организации превосходит величину текущих обязательств, однако, активы используются неэффективно.',
  })
  const CLHelpInfo = getHelpInfo(CL, 1, 2.5, {
    normal:
      'Показатель текущей ликвидности соответствует пороговому значению, таким образом, организация способна погасить свои текущие обязательства за счет оборотных активов в период, не превышающем 1 год. Дастаточным является значение >1, превышение значения 2,5 характеризуется высокой ликвидностью и неэффективностью использования оборотных активов.',
    minimal:
      'Показатель текущей ликвидности ниже порогового значения, таким образом, оборотных акивов организации недостаточно для расчета с текущими обязательтсвами.',
    maximal:
      'Показатель текущей ликвидности выше порогового значения, таким образом, величина оборотных активов организации превышает величину текущих обязательств, однако, происходит замедление оборотов оборотных активов, что говорит о неэффективности использования активов организации.',
  })
  const WCRHelpInfo = getHelpInfo(WCR || 0, 0.1, Infinity, {
    normal:
      'Показатель соответствует пороговому значению, однако, необходимо смотреть на изменение показателя в динамике, увеличение показателя из периода в период свидетельствует о повышении её финансовой устойчивости, при уменьшении показателя в динамике ситуация обратная.',
    minimal:
      'Показатель ниже нормы, таким образом, организация не является платежеспособной (финансирование деятельности осуществляется преимущественно за счет заемных средств).',
    maximal:
      'Показатель соответствует пороговому значению, однако, необходимо смотреть на изменение показателя в динамике, увеличение показателя из периода в период свидетельствует о повышении её финансовой устойчивости, при уменьшении показателя в динамике ситуация обратная.',
  })

  return [
    {
      name: 'Абсолютная ликвидность',
      value: AL,
      ...ALHelpInfo,
    },
    {
      name: 'Срочная ликвидность',
      value: UL,
      ...ULHelpInfo,
    },
    {
      name: 'Текущая ликвидность',
      value: CL,
      ...CLHelpInfo,
    },
    {
      name: 'Коэффициент обеспеченности собственными оборотными средствами',
      value: WCR,
      ...WCRHelpInfo,
    },
  ]
}
