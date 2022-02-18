import { IFinancialIndependenceFormState } from '../../../routes/FinancialIndependenceRoute/FinancialIndependenceForm/FinancialIndependenceForm'
import { ILiquidityFormState } from '../../../routes/LiquidityRoute/LiquidityForm/LiquidityForm'
import { ITurnOverFormState } from '../../../routes/TurnOverRoute/TurnOverForm/TurnOverForm'
import { IndicatorsEnum } from '../../../utils/indicators'
import { TReduxRootState } from '../../store'

export const liquidityFormSelector = (
  s: TReduxRootState
): ILiquidityFormState => {
  return {
    [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]:
      s.calculations.ACCOUNTS_RECEIVABLE,
    [IndicatorsEnum.INDICATOR_BANKROLL]: s.calculations.BANKROLL,
    [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: s.calculations.CURRENT_ASSETS,
    [IndicatorsEnum.INDICATOR_EQUITY]: s.calculations.EQUITY,
    [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: s.calculations.FIXED_ASSETS,
    [IndicatorsEnum.INDICATOR_SFI]: s.calculations.SFI,
    [IndicatorsEnum.INDICATOR_STO]: s.calculations.STO,
  }
}

export const financialIndependenceFormSelector = (
  s: TReduxRootState
): IFinancialIndependenceFormState => {
  return {
    [IndicatorsEnum.INDICATOR_EQUITY]: s.calculations.EQUITY,
    [IndicatorsEnum.INDICATOR_VB]: s.calculations.VB,
    [IndicatorsEnum.INDICATOR_LTD]: s.calculations.LTD,
    [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: s.calculations.CURRENT_ASSETS,
    [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: s.calculations.FIXED_ASSETS,
    [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]:
      s.calculations.ACCOUNTS_RECEIVABLE,
  }
}

export const turnOverFormSelector = (
  s: TReduxRootState
): ITurnOverFormState => {
  return {
    [IndicatorsEnum.INDICATOR_REVENUE]: s.calculations.REVENUE,
    [IndicatorsEnum.INDICATOR_VB]: s.calculations.VB,
    [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: s.calculations.CURRENT_ASSETS,
  }
}
