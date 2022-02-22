import React, { useMemo } from 'react'
import { Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'

import { useTypedSelector } from '../../redux/hooks/useTypedSelector'
import { profitabilityFormSelector } from '../../redux/slices/calculationsSlice/selectors'
import { MainLayout } from '../../_layouts/MainLayout/MainLayout'
import { AnalysResults } from '../../common/components/AnalysResults/AnalysResults'

import { ProfitabilityForm } from './ProfitabilityForm/ProfitabilityForm'
import { getProfitabilityAnalys } from '../../utils/analys/profitabilityAnalys'

const ProfitabilityLink = styled('a')(({ theme }) => ({
  color: '#2c2c2c',
  opacity: 0.7,
  transition: 'all .25s',

  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export interface IProfitabilityRouteProps {}

export const ProfitabilityRoute: React.FC<IProfitabilityRouteProps> = () => {
  const profitability = useTypedSelector(profitabilityFormSelector)
  const analys = useMemo(
    () => getProfitabilityAnalys(profitability),
    [profitability]
  )

  return (
    <MainLayout title="Рентабельность">
      <ProfitabilityForm profitability={profitability} />

      {analys && <AnalysResults analys={analys} />}

      <Paper elevation={6} sx={{ marginTop: 6, maxWidth: 680, padding: 2 }}>
        <Typography variant="body1">
          {`
              Анализ показателей рентабельности в сравнении с среднеотраслевыми
            значениями. Нормативных значений нет, смотрятся среднеотраслевые
            показатели, чем больше отклонение, тем больше вероятность налоговой
            проверки, критическим считается отклонение 10% и больше. Посмотреть
            среднеотраслевую рентабельность можно на сайте `}
          <ProfitabilityLink
            target="_blank"
            href="https://www.nalog.gov.ru/rn77/taxation/reference_work/conception_vnp/"
          >
            налоговой службы
          </ProfitabilityLink>
        </Typography>
      </Paper>
    </MainLayout>
  )
}
