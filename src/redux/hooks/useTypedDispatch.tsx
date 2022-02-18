import { useDispatch } from 'react-redux'

import { TReduxDispatch } from '../store'

export const useTypedDispatch = () => useDispatch<TReduxDispatch>()
