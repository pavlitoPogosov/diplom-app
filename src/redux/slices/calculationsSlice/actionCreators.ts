import { IndicatorsEnum } from '../../../utils/indicators'
import { LocalStorageKeysEnum } from '../../../utils/localStorageKeys'
import { TReduxActionCreator } from '../../store'

import calculationsActions, { ICalculationsStoreState } from './index'

export const initCalculationsAC: TReduxActionCreator = () => {
  return async (dispatch) => {
    try {
      const savedCalculations = JSON.parse(
        localStorage.getItem(LocalStorageKeysEnum.FORM) ?? ''
      )

      if (savedCalculations && typeof savedCalculations === 'object') {
        dispatch(calculationsActions.updateState(savedCalculations))
      }
    } catch {}
  }
}

export interface UpdateCalculationValuesAC {
  values: Partial<Record<IndicatorsEnum, string>>
}

export const updateCalculationsValuesAC: TReduxActionCreator<
  UpdateCalculationValuesAC
> = ({ values }) => {
  return async (dispatch, getState) => {
    const newValues = {
      ...values,
    }
    dispatch(calculationsActions.updateState(newValues))
    try {
      const { calculations } = getState()
      localStorage.setItem(
        LocalStorageKeysEnum.FORM,
        JSON.stringify({
          ...calculations,
          ...newValues,
        })
      )
    } catch {}
  }
}
