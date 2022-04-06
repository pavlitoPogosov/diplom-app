import React, { useMemo } from 'react'

import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { getLiquidityAnalis } from '../../utils/analys/liquidityAnalys'
import { MainLayout } from '../../_layouts/MainLayout/MainLayout'
import { liquidityFormSelector } from '../../redux/slices/calculationsSlice/selectors'

import { LiquidityForm } from './LiquidityForm/LiquidityForm'
import { AnalysResults } from '../../common/components/AnalysResults/AnalysResults'

export interface ILiquidityRouteProps {}

export const LiquidityRoute: React.FC<ILiquidityRouteProps> = () => {
  const liquidity = useTypedSelector(liquidityFormSelector)
  const analys = useMemo(() => getLiquidityAnalis(liquidity), [liquidity])

  return (
    <MainLayout title="Ликвидность">
      <LiquidityForm liquidity={liquidity} />

      <AnalysResults analys={analys} />
    </MainLayout>
  )
}
