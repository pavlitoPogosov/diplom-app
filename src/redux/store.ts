import {
  configureStore,
  combineReducers,
  PayloadAction,
} from '@reduxjs/toolkit'

import { calculationsSlice } from './slices/calculationsSlice'

const combinedReducer = combineReducers({
  calculations: calculationsSlice.reducer,
})

const rootReducer = (state: any, action: PayloadAction<void>) => {
  // if (action.type === authSlice.actions.logout().type) {
  //   state = {}
  // }

  return combinedReducer(state, action)
}

export const setupReduxStore = () =>
  configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    reducer: rootReducer,
  })

export type TReduxRootState = ReturnType<
  ReturnType<typeof setupReduxStore>['getState']
>
export type TReduxDispatch = ReturnType<typeof setupReduxStore>['dispatch']
export type TReduxActionCreator<A = void, R = void> = (
  args: A
) => (dispatch: TReduxDispatch, getState: () => TReduxRootState) => Promise<R>

export type TReduxSelector<T = void> = (s: TReduxRootState) => T
