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
