import React from 'react'
import { Paper, Typography } from '@mui/material'

import { MainLayout } from '../../_layouts/MainLayout/MainLayout'
import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { ExpressAnalysForm } from './ExpressAnalysForm/ExpressAnalysForm'
import { expressAnalysFormSelector } from '../../redux/slices/calculationsSlice/selectors'
import { ExpressAnalysTable } from './ExpressAnalysTable/ExpressAnalysTable'

export interface IExpressAnalysRouteProps {}

export const ExpressAnalysRoute: React.FC<IExpressAnalysRouteProps> = () => {
  const expressAnalys = useTypedSelector(expressAnalysFormSelector)

  return (
    <MainLayout title="Экспресс анализ">
      <ExpressAnalysForm expressAnalys={expressAnalys} />

      <ExpressAnalysTable expressAnalys={expressAnalys} />

      <Paper elevation={6} sx={{ marginTop: 6, maxWidth: 680, padding: 2 }}>
        <Typography variant="body1">
          Решение необходимо принимать в совокупности полученной информации,
          принятие решения не может быть на основании 1 критерия
        </Typography>
      </Paper>
    </MainLayout>
  )
}
