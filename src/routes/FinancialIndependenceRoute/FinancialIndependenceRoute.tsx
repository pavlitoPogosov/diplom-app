import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { AnalysResults } from '../../common/components/AnalysResults/AnalysResults'
import { financialIndependenceFormSelector } from '../../redux/slices/calculationsSlice/selectors'
import { getFinancialIndependenceAnalys } from '../../utils/analys/financialIndependenceAnalys'
import { MainLayout } from '../../_layouts/MainLayout/MainLayout'
import { DinamicForm } from './DinamicForm/DinamicForm'

import { FinancialIndependenceForm } from './FinancialIndependenceForm/FinancialIndependenceForm'

export interface IFinancialIndependenceRouteProps {}

export const FinancialIndependenceRoute: React.FC<
  IFinancialIndependenceRouteProps
> = () => {
  const financialIndependence = useSelector(financialIndependenceFormSelector)
  const analys = useMemo(
    () => getFinancialIndependenceAnalys(financialIndependence),
    [financialIndependence]
  )

  return (
    <MainLayout title="Финансовая независимость">
      <FinancialIndependenceForm
        financialIndependence={financialIndependence}
      />
      <AnalysResults analys={analys} />
      <DinamicForm currentPeriodValue={analys[0]?.value || '0'} />
    </MainLayout>
  )
}
