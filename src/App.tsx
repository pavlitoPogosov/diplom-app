import React, { useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Route, Routes } from 'react-router'

import {
  FINANCIAL_INDEPENDENCE_ROUTE,
  LIQUIDITY_ROUTE,
  TURNOVER_ROUTE,
} from './utils/routes'
import { LiquidityRoute } from './routes/LiquidityRoute/LiquidityRoute'
import { defaultTheme } from './themes/defaultTheme'
import { useTypedDispatch } from './redux/hooks/useTypedDispatch'
import { initCalculationsAC } from './redux/slices/calculationsSlice/actionCreators'
import { FinancialIndependenceRoute } from './routes/FinancialIndependenceRoute/FinancialIndependenceRoute'
import { TurnOverRoute } from './routes/TurnOverRoute/TurnOverRoute'

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  const dispatch = useTypedDispatch()

  useEffect(() => {
    dispatch(initCalculationsAC())
    // eslint-disable-next-line
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LiquidityRoute />} />
        <Route path={LIQUIDITY_ROUTE} element={<LiquidityRoute />} />
        <Route
          path={FINANCIAL_INDEPENDENCE_ROUTE}
          element={<FinancialIndependenceRoute />}
        />
        <Route path={TURNOVER_ROUTE} element={<TurnOverRoute />} />
      </Routes>
    </ThemeProvider>
  )
}
