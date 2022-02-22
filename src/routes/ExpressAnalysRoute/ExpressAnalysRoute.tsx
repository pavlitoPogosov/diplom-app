import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

import { MainLayout } from '../../_layouts/MainLayout/MainLayout'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { ExpressTestForm } from './ExpressTestForm/ExpressTestForm'

const ExpressAnalysWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

export interface IExpressAnalysRouteProps {}

export const ExpressAnalysRoute: React.FC<IExpressAnalysRouteProps> = () => {
  const { questions } = useTypedSelector((s) => s.expressTest)

  return (
    <MainLayout title="Экспресс анализ">
      <ExpressAnalysWrapper>
        <Typography sx={{ maxWidth: 520 }} variant="body1">
          Решение необходимо принимать в совокупности полученной информации,
          принятие решения не может быть на основании 1 критерия
        </Typography>

        <ExpressTestForm questions={questions} />
      </ExpressAnalysWrapper>
    </MainLayout>
  )
}
