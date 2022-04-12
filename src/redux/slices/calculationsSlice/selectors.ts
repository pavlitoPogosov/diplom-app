import { MainLayout } from './../../../_layouts/MainLayout/MainLayout'
import { IProfitabilityFormState } from './../../../routes/ProfitabilityRoute/ProfitabilityForm/ProfitabilityForm'
import { IFinancialIndependenceFormState } from '../../../routes/FinancialIndependenceRoute/FinancialIndependenceForm/FinancialIndependenceForm'
import { ILiquidityFormState } from '../../../routes/LiquidityRoute/LiquidityForm/LiquidityForm'
import { ITurnOverFormState } from '../../../routes/TurnOverRoute/TurnOverForm/TurnOverForm'
import { IndicatorsEnum } from '../../../utils/indicators'
import { TReduxRootState } from '../../store'
import { IExpressAnalysFormState } from '../../../routes/ExpressAnalysRoute/ExpressAnalysForm/ExpressAnalysForm'
import { ILiquidityDinamicFormState } from '../../../routes/LiquidityRoute/LiquidityDinamic/LiquidityDinamic'
import { IDinamicFormState } from '../../../routes/FinancialIndependenceRoute/DinamicForm/DinamicForm'
import { IProfitabilityDinamicFormState } from '../../../routes/ProfitabilityRoute/ProfitabilityDinamic/ProfitabilityDinamic'

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

export const liquidityDinamicFormSelector = (
  s: TReduxRootState
): ILiquidityDinamicFormState => {
  return {
    [IndicatorsEnum.INDICATOR_EQUITY_0]: s.calculations.EQUITY_0,
    [IndicatorsEnum.INDICATOR_FIXED_ASSETS_0]: s.calculations.FIXED_ASSETS_0,
    [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0]:
      s.calculations.CURRENT_ASSETS_0,
    [IndicatorsEnum.INDICATOR_EQUITY_1]: s.calculations.EQUITY_1,
    [IndicatorsEnum.INDICATOR_FIXED_ASSETS_1]: s.calculations.FIXED_ASSETS_1,
    [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1]:
      s.calculations.CURRENT_ASSETS_1,
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

export const financialIndependenceDinamicFormSelector = (
  s: TReduxRootState
): IDinamicFormState => {
  return {
    [IndicatorsEnum.INDICATOR_EQUITY_0]: s.calculations.EQUITY_0,
    [IndicatorsEnum.INDICATOR_VB_0]: s.calculations.VB_0,
    [IndicatorsEnum.INDICATOR_EQUITY_1]: s.calculations.EQUITY_1,
    [IndicatorsEnum.INDICATOR_VB_1]: s.calculations.VB_1,
  }
}

export const profitabilityDinamicFormSelector = (
  s: TReduxRootState
): IProfitabilityDinamicFormState => {
  return {
    [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0]: s.calculations.CLEAR_PROFIT_0,
    [IndicatorsEnum.INDICATOR_VB_0]: s.calculations.VB_0,
    [IndicatorsEnum.INDICATOR_REVENUE_0]: s.calculations.REVENUE_0,
    [IndicatorsEnum.INDICATOR_PRIME_COST_0]: s.calculations.PRIME_COST_0,
    [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_0]:
      s.calculations.OTHER_EXPENSES_0,
    [IndicatorsEnum.INDICATOR_EQUITY_0]: s.calculations.EQUITY_0,
    [IndicatorsEnum.INDICATOR_LTD_0]: s.calculations.LTD_0,

    [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1]: s.calculations.CLEAR_PROFIT_1,
    [IndicatorsEnum.INDICATOR_VB_1]: s.calculations.VB_1,
    [IndicatorsEnum.INDICATOR_REVENUE_1]: s.calculations.REVENUE_1,
    [IndicatorsEnum.INDICATOR_PRIME_COST_1]: s.calculations.PRIME_COST_1,
    [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_1]:
      s.calculations.OTHER_EXPENSES_1,
    [IndicatorsEnum.INDICATOR_EQUITY_1]: s.calculations.EQUITY_1,
    [IndicatorsEnum.INDICATOR_LTD_1]: s.calculations.LTD_1,
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
