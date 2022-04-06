import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AnalysResults } from '../../common/components/AnalysResults/AnalysResults'
import { turnOverFormSelector } from '../../redux/slices/calculationsSlice/selectors'
import { getTurnOverAnalys } from '../../utils/analys/turnOverAnalys'

import { MainLayout } from '../../_layouts/MainLayout/MainLayout'

import { TurnOverForm } from './TurnOverForm/TurnOverForm'

export interface ITurnOverRouteProps {}

export const TurnOverRoute: React.FC<ITurnOverRouteProps> = () => {
  const turnover = useSelector(turnOverFormSelector)
  const analys = useMemo(() => getTurnOverAnalys(turnover), [turnover])

  return (
    <MainLayout title="Оборачиваемость">
      <TurnOverForm turnover={turnover} />

      <AnalysResults analys={analys} />
    </MainLayout>
  )
}
