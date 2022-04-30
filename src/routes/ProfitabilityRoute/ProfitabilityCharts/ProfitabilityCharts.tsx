import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import BigJs from 'big.js'
import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import {
  profitabilityDinamicFormSelector,
  profitabilityFormSelector,
} from '../../../redux/slices/calculationsSlice/selectors'
import { IndicatorsEnum } from '../../../utils/indicators'
import { IProfitabilityDinamicFormState } from '../ProfitabilityDinamic/ProfitabilityDinamic'
import { IProfitabilityFormState } from '../ProfitabilityForm/ProfitabilityForm'

const getROA = (
  values: IProfitabilityDinamicFormState,
  currentValue: IProfitabilityFormState
) => {
  const ROA = currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]
    ? new BigJs(currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT])
        .div(currentValue[IndicatorsEnum.INDICATOR_VB])
        .mul(100)
        .toFixed(1)
    : 0

  const ROA_0 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0])
    .div(values[IndicatorsEnum.INDICATOR_VB_0])
    .mul(100)
    .toFixed(1)

  const ROA_1 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1])
    .div(values[IndicatorsEnum.INDICATOR_VB_1])
    .mul(100)
    .toFixed(1)

  return {
    ROA_1,
    ROA_0,
    ROA,
  }
}

const getROS = (
  values: IProfitabilityDinamicFormState,
  currentValue: IProfitabilityFormState
) => {
  const ROS = currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]
    ? new BigJs(currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT])
        .div(currentValue[IndicatorsEnum.INDICATOR_REVENUE])
        .mul(100)
        .toFixed(1)
    : 0

  const ROS_0 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0])
    .div(values[IndicatorsEnum.INDICATOR_REVENUE_0])
    .mul(100)
    .toFixed(1)

  const ROS_1 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1])
    .div(values[IndicatorsEnum.INDICATOR_REVENUE_1])
    .mul(100)
    .toFixed(1)

  return {
    ROS_1,
    ROS_0,
    ROS,
  }
}

const getROCC = (
  values: IProfitabilityDinamicFormState,
  currentValue: IProfitabilityFormState
) => {
  const ROCC = currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]
    ? new BigJs(currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT])
        .div(
          new BigJs(currentValue[IndicatorsEnum.INDICATOR_PRIME_COST]).add(
            new BigJs(currentValue[IndicatorsEnum.INDICATOR_OTHER_EXPENSES])
          )
        )
        .mul(100)
        .toFixed(1)
    : 0

  const ROCC_0 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0])
    .div(
      new BigJs(values[IndicatorsEnum.INDICATOR_PRIME_COST_0]).add(
        new BigJs(values[IndicatorsEnum.INDICATOR_OTHER_EXPENSES_0])
      )
    )
    .mul(100)
    .toFixed(1)

  const ROCC_1 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1])
    .div(
      new BigJs(values[IndicatorsEnum.INDICATOR_PRIME_COST_1]).add(
        new BigJs(values[IndicatorsEnum.INDICATOR_OTHER_EXPENSES_1])
      )
    )
    .mul(100)
    .toFixed(1)

  return {
    ROCC_1,
    ROCC_0,
    ROCC,
  }
}

const getROE = (
  values: IProfitabilityDinamicFormState,
  currentValue: IProfitabilityFormState
) => {
  const ROE = currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]
    ? new BigJs(currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT])
        .div(new BigJs(currentValue[IndicatorsEnum.INDICATOR_EQUITY]))
        .mul(100)
        .toFixed(1)
    : 0

  const ROE_0 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0])
    .div(new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY_0]))
    .mul(100)
    .toFixed(1)

  const ROE_1 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1])
    .div(new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY_1]))
    .mul(100)
    .toFixed(1)

  return {
    ROE_1,
    ROE_0,
    ROE,
  }
}

const getROI = (
  values: IProfitabilityDinamicFormState,
  currentValue: IProfitabilityFormState
) => {
  const ROI = currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT]
    ? new BigJs(currentValue[IndicatorsEnum.INDICATOR_CLEAR_PROFIT])
        .div(
          new BigJs(currentValue[IndicatorsEnum.INDICATOR_EQUITY]).add(
            new BigJs(currentValue[IndicatorsEnum.INDICATOR_LTD])
          )
        )
        .mul(100)
        .toFixed(1)
    : 0

  const ROI_0 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0])
    .div(
      new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY_0]).add(
        new BigJs(values[IndicatorsEnum.INDICATOR_LTD_0])
      )
    )
    .mul(100)
    .toFixed(1)

  const ROI_1 = new BigJs(values[IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1])
    .div(
      new BigJs(values[IndicatorsEnum.INDICATOR_EQUITY_1]).add(
        new BigJs(values[IndicatorsEnum.INDICATOR_LTD_1])
      )
    )
    .mul(100)
    .toFixed(1)

  return {
    ROI_1,
    ROI_0,
    ROI,
  }
}

export interface IProfitabilityChartsProps {}

export const ProfitabilityCharts: React.FC<IProfitabilityChartsProps> = () => {
  const dinamicValue = useTypedSelector(profitabilityDinamicFormSelector)
  const usualValue = useTypedSelector(profitabilityFormSelector)

  if (!dinamicValue[IndicatorsEnum.INDICATOR_LTD_1]) {
    return null
  }

  const { ROA_1, ROA_0, ROA } = getROA(dinamicValue, usualValue)
  const { ROS_1, ROS_0, ROS } = getROS(dinamicValue, usualValue)
  const { ROCC_1, ROCC_0, ROCC } = getROCC(dinamicValue, usualValue)
  const { ROE, ROE_0, ROE_1 } = getROE(dinamicValue, usualValue)
  const { ROI, ROI_0, ROI_1 } = getROI(dinamicValue, usualValue)

  return (
    <>
      <Typography marginTop={4} marginBottom={2} variant="h4">
        Рентабельность активов (ROA)
      </Typography>

      <div>
        <LineChart
          width={730}
          height={250}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          data={[
            {
              name: 'Период 1',
              Значение: ROA_1,
            },
            {
              name: 'Период 0',
              Значение: ROA_0,
            },
            {
              name: 'Текущий',
              Значение: ROA,
            },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="Значение" stroke="#8884d8" />
        </LineChart>

        <TableContainer sx={{ marginTop: 2, maxWidth: 730 }} component={Paper}>
          <Table sx={{}} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Период</TableCell>
                <TableCell align="right">1</TableCell>
                <TableCell align="right">0</TableCell>
                <TableCell align="right">текущий</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>значение</TableCell>
                <TableCell align="right">{ROA_1}</TableCell>
                <TableCell align="right">{ROA_0}</TableCell>
                <TableCell align="right">{ROA || '---'}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Typography marginTop={4} marginBottom={2} variant="h4">
        Рентабельность продаж (ROS)
      </Typography>

      <LineChart
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        data={[
          {
            name: 'Период 1',
            Значение: ROS_1,
          },
          {
            name: 'Период 0',
            Значение: ROS_0,
          },
          {
            name: 'Текущий',
            Значение: ROS,
          },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="Значение" stroke="#8884d8" />
      </LineChart>

      <TableContainer sx={{ marginTop: 2, maxWidth: 730 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Период</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">текущий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>значение</TableCell>
              <TableCell align="right">{ROS_1}</TableCell>
              <TableCell align="right">{ROS_0}</TableCell>
              <TableCell align="right">{ROS || '---'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography marginTop={4} marginBottom={2} variant="h4">
        Рентабельность текущих затрат (ROCC)
      </Typography>

      <LineChart
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        data={[
          {
            name: 'Период 1',
            Значение: ROCC_1,
          },
          {
            name: 'Период 0',
            Значение: ROCC_0,
          },
          {
            name: 'Текущий',
            Значение: ROCC,
          },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="Значение" stroke="#8884d8" />
      </LineChart>

      <TableContainer sx={{ marginTop: 2, maxWidth: 730 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Период</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">текущий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>значение</TableCell>
              <TableCell align="right">{ROCC_1}</TableCell>
              <TableCell align="right">{ROCC_0}</TableCell>
              <TableCell align="right">{ROCC || '---'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography marginTop={4} marginBottom={2} variant="h4">
        Рентабельность собственного капитала (ROE)
      </Typography>

      <LineChart
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        data={[
          {
            name: 'Период 1',
            Значение: ROE_1,
          },
          {
            name: 'Период 0',
            Значение: ROE_0,
          },
          {
            name: 'Текущий',
            Значение: ROE,
          },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="Значение" stroke="#8884d8" />
      </LineChart>

      <TableContainer sx={{ marginTop: 2, maxWidth: 730 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Период</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">текущий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>значение</TableCell>
              <TableCell align="right">{ROE_1}</TableCell>
              <TableCell align="right">{ROE_0}</TableCell>
              <TableCell align="right">{ROE || '---'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography marginTop={4} marginBottom={2} variant="h4">
        Рентабельность инвестиций (ROI)
      </Typography>

      <LineChart
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        data={[
          {
            name: 'Период 1',
            Значение: ROI_1,
          },
          {
            name: 'Период 0',
            Значение: ROI_0,
          },
          {
            name: 'Текущий',
            Значение: ROI,
          },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="Значение" stroke="#8884d8" />
      </LineChart>

      <TableContainer sx={{ marginTop: 2, maxWidth: 730 }} component={Paper}>
        <Table sx={{}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Период</TableCell>
              <TableCell align="right">1</TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">текущий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>значение</TableCell>
              <TableCell align="right">{ROI_1}</TableCell>
              <TableCell align="right">{ROI_0}</TableCell>
              <TableCell align="right">{ROI || '---'}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
