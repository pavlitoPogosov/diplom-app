import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TReduxRootState } from '../store'

export const useTypedSelector: TypedUseSelectorHook<TReduxRootState> =
  useSelector
