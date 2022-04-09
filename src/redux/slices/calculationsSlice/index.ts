import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IndicatorsEnum } from '../../../utils/indicators'

export type ICalculationsStoreState = Record<IndicatorsEnum, string>

const initialCalculationsState: ICalculationsStoreState = {
  [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]: '',
  [IndicatorsEnum.INDICATOR_BANKROLL]: '',
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: '',
  [IndicatorsEnum.INDICATOR_EQUITY]: '',
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: '',
  [IndicatorsEnum.INDICATOR_SFI]: '',
  [IndicatorsEnum.INDICATOR_STO]: '',
  [IndicatorsEnum.INDICATOR_VB]: '',
  [IndicatorsEnum.INDICATOR_LTD]: '',
  [IndicatorsEnum.INDICATOR_REVENUE]: '',
  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT]: '',
  [IndicatorsEnum.INDICATOR_PRIME_COST]: '',
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES]: '',

  [IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER]: '',
  [IndicatorsEnum.INDICATOR_TEST_SMI_INFO]: '',
  [IndicatorsEnum.INDICATOR_TEST_OKVED]: '',
  [IndicatorsEnum.INDICATOR_TEST_GD]: '',
  [IndicatorsEnum.INDICATOR_TEST_CHILD_CMP]: '',
  [IndicatorsEnum.INDICATOR_TEST_QUALITY]: '',
  [IndicatorsEnum.INDICATOR_TEST_CHS]: '',
  [IndicatorsEnum.INDICATOR_TEST_MU]: '',
  [IndicatorsEnum.INDICATOR_TEST_MA]: '',
  [IndicatorsEnum.INDICATOR_TEST_NL]: '',
  [IndicatorsEnum.INDICATOR_TEST_PL]: '',
  [IndicatorsEnum.INDICATOR_TEST_HL]: '',

  [IndicatorsEnum.INDICATOR_EQUITY_0]: '',
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_0]: '',
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0]: '',
  [IndicatorsEnum.INDICATOR_EQUITY_1]: '',
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_1]: '',
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1]: '',
}

export const calculationsSlice = createSlice({
  initialState: initialCalculationsState,
  name: 'accounts',
  reducers: {
    updateState(
      state: ICalculationsStoreState,
      action: PayloadAction<Partial<ICalculationsStoreState> | null>
    ) {
      for (const [property, value] of Object.entries(action.payload ?? {})) {
        if (typeof state[property as IndicatorsEnum] !== 'undefined') {
          state[property as IndicatorsEnum] = value
        }
      }
    },
  },
})

export default calculationsSlice.actions
