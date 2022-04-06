import React from 'react'
import {
  Typography,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Table,
  Paper,
  Chip,
} from '@mui/material'

import { IExpressAnalysFormState } from '../ExpressAnalysForm/ExpressAnalysForm'
import { IndicatorsEnum } from '../../../utils/indicators'
import { Box } from '@mui/system'

const isReadyToDisplay = (values: IExpressAnalysFormState) => {
  return (
    values.TEST_CHILD_CMP !== '' &&
    values.TEST_CHS !== '' &&
    values.TEST_DATE_REGISTER !== '' &&
    values.TEST_GD !== '' &&
    values.TEST_HL !== '' &&
    values.TEST_MA !== '' &&
    values.TEST_MU !== '' &&
    values.TEST_NL !== '' &&
    values.TEST_OKVED !== '' &&
    values.TEST_PL !== '' &&
    values.TEST_QUALITY !== '' &&
    values.TEST_SMI_INFO !== ''
  )
}

enum TableCellValueEnum {
  POSITIVE = 'Позитив',
  NEGATIVE = 'Негатив',
  NEUTRAL = 'Нейтрально',
}

interface ITableCell {
  name: string
  value: TableCellValueEnum
}

const getTableCells = (values: IExpressAnalysFormState) => {
  const cells = Object.entries(values)
    .map(([name, value]) => {
      if (name === IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER) {
        return {
          name: 'Дата регистрации',
          value:
            value === 'Менее 2 лет'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_SMI_INFO) {
        return {
          name: 'Информация в СМИ',
          value:
            value === 'Нет'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_OKVED) {
        return {
          name: 'Разноплановый ОКВЭД ',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_GD) {
        return {
          name: 'Одновременная смена учредителей и ГД',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_CHILD_CMP) {
        return {
          name: 'Дочерние/головные организации',
          value:
            value === 'Нет'
              ? TableCellValueEnum.NEUTRAL
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_QUALITY) {
        return {
          name: 'Качество контрагентов',
          value:
            value === 'Плохое'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_CHS) {
        return {
          name: 'Включение в различные ЧС',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_MU) {
        return {
          name: 'Массовый учредитель',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_MA) {
        return {
          name: 'Массовый адрес регистрации',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_NL) {
        return {
          name: 'Вхождение в различные негативные списки',
          value:
            value === 'Да'
              ? TableCellValueEnum.NEGATIVE
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_PL) {
        return {
          name: 'Вхождение в различные позитивные списки',
          value:
            value === 'Нет'
              ? TableCellValueEnum.NEUTRAL
              : TableCellValueEnum.POSITIVE,
        }
      }

      if (name === IndicatorsEnum.INDICATOR_TEST_HL) {
        return {
          name: 'Наличие лицензий',
          value:
            value === 'Нет'
              ? TableCellValueEnum.NEUTRAL
              : TableCellValueEnum.POSITIVE,
        }
      }
    })
    .filter(Boolean) as ITableCell[]

  let positiveCount = 0
  let negativeCount = 0
  let neutralCount = 0

  cells.forEach(({ value }) => {
    if (value === TableCellValueEnum.NEGATIVE) {
      negativeCount++
    }

    if (value === TableCellValueEnum.POSITIVE) {
      positiveCount++
    }

    if (value === TableCellValueEnum.NEUTRAL) {
      neutralCount++
    }
  })

  return {
    cells,
    positivePercent: parseFloat(
      ((positiveCount / cells.length) * 100).toFixed(2)
    ),
    negativePercent: parseFloat(
      ((negativeCount / cells.length) * 100).toFixed(2)
    ),
    neutralPercent: parseFloat(
      ((neutralCount / cells.length) * 100).toFixed(2)
    ),
  }
}

export interface IExpressAnalysTableProps {
  expressAnalys: IExpressAnalysFormState
}

export const ExpressAnalysTable: React.FC<IExpressAnalysTableProps> = ({
  expressAnalys,
}) => {
  if (!isReadyToDisplay(expressAnalys)) return null

  const { cells, positivePercent, negativePercent, neutralPercent } =
    getTableCells(expressAnalys)

  return (
    <>
      <Typography sx={{ marginTop: 10, marginBottom: 4 }} variant="h4">
        Результаты
      </Typography>

      <Box display="flex" marginBottom={3}>
        <Chip
          label={`Позитив - ${positivePercent}%`}
          color="success"
          sx={{ marginRight: 1 }}
        />
        <Chip
          label={`Негатив - ${negativePercent}%`}
          color="error"
          sx={{ marginRight: 1 }}
        />
        <Chip label={`Нейтрально - ${neutralPercent}%`} color="warning" />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableBody>
            {cells.map(({ name, value }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>

                <TableCell
                  align="right"
                  style={{
                    color:
                      value === TableCellValueEnum.POSITIVE
                        ? 'green'
                        : value === TableCellValueEnum.NEGATIVE
                        ? 'red'
                        : 'yellow',
                  }}
                >
                  {value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
