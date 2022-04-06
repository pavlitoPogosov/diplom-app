import { MainLayout } from './../../../_layouts/MainLayout/MainLayout'
import { IProfitabilityFormState } from './../../../routes/ProfitabilityRoute/ProfitabilityForm/ProfitabilityForm'
import { IFinancialIndependenceFormState } from '../../../routes/FinancialIndependenceRoute/FinancialIndependenceForm/FinancialIndependenceForm'
import { ILiquidityFormState } from '../../../routes/LiquidityRoute/LiquidityForm/LiquidityForm'
import { ITurnOverFormState } from '../../../routes/TurnOverRoute/TurnOverForm/TurnOverForm'
import { IndicatorsEnum } from '../../../utils/indicators'
import { TReduxRootState } from '../../store'
import { IExpressAnalysFormState } from '../../../routes/ExpressAnalysRoute/ExpressAnalysForm/ExpressAnalysForm'

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

export const profitabilityFormSelector = (
  s: TReduxRootState
): IProfitabilityFormState => {
  return {
    [IndicatorsEnum.INDICATOR_CLEAR_PROFIT]: s.calculations.CLEAR_PROFIT,
    [IndicatorsEnum.INDICATOR_PRIME_COST]: s.calculations.PRIME_COST,
    [IndicatorsEnum.INDICATOR_OTHER_EXPENSES]: s.calculations.OTHER_EXPENSES,
    [IndicatorsEnum.INDICATOR_VB]: s.calculations.VB,
    [IndicatorsEnum.INDICATOR_REVENUE]: s.calculations.REVENUE,
    [IndicatorsEnum.INDICATOR_EQUITY]: s.calculations.EQUITY,
    [IndicatorsEnum.INDICATOR_LTD]: s.calculations.LTD,
  }
}

export const expressAnalysFormSelector = (
  s: TReduxRootState
): IExpressAnalysFormState => {
  return {
    [IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER]:
      s.calculations.TEST_DATE_REGISTER,
    [IndicatorsEnum.INDICATOR_TEST_SMI_INFO]: s.calculations.TEST_SMI_INFO,
    [IndicatorsEnum.INDICATOR_TEST_OKVED]: s.calculations.TEST_OKVED,
    [IndicatorsEnum.INDICATOR_TEST_GD]: s.calculations.TEST_GD,
    [IndicatorsEnum.INDICATOR_TEST_CHILD_CMP]: s.calculations.TEST_CHILD_CMP,
    [IndicatorsEnum.INDICATOR_TEST_QUALITY]: s.calculations.TEST_QUALITY,
    [IndicatorsEnum.INDICATOR_TEST_CHS]: s.calculations.TEST_CHS,
    [IndicatorsEnum.INDICATOR_TEST_MU]: s.calculations.TEST_MU,
    [IndicatorsEnum.INDICATOR_TEST_MA]: s.calculations.TEST_MU,
    [IndicatorsEnum.INDICATOR_TEST_NL]: s.calculations.TEST_NL,
    [IndicatorsEnum.INDICATOR_TEST_PL]: s.calculations.TEST_PL,
    [IndicatorsEnum.INDICATOR_TEST_HL]: s.calculations.TEST_HL,
  }
}
