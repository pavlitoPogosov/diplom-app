import React, { useMemo } from 'react'
import * as yup from 'yup'
import BigJS from 'big.js'
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Form, Formik } from 'formik'
import { styled } from '@mui/system'
import { InputField } from '../../../common/components/InputField/InputField'
import { IndicatorsEnum } from '../../../utils/indicators'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { liquidityDinamicFormSelector } from '../../../redux/slices/calculationsSlice/selectors'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { COMMON_VALIDATION } from '../../../utils/validation'

export interface ILiquidityDinamicFormState {
  [IndicatorsEnum.INDICATOR_EQUITY_0]: string
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_0]: string
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0]: string
  [IndicatorsEnum.INDICATOR_EQUITY_1]: string
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_1]: string
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1]: string
}

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_EQUITY_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_EQUITY_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1]: COMMON_VALIDATION,
})

const LiquidityFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface ILiquidityDinamicProps {
  currentPeriodValue: string
}

export const LiquidityDinamic: React.FC<ILiquidityDinamicProps> = ({
  currentPeriodValue,
}) => {
  const formValue = useTypedSelector(
    liquidityDinamicFormSelector
  ) as ILiquidityDinamicFormState
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: ILiquidityDinamicFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      }) as any
    )
  }

  const { beforePrevPeriod, prevPeriod } = useMemo(() => {
    if (!Object.values(formValue).filter(Boolean).length) {
      return {
        beforePrevPeriod: null,
        prevPeriod: null,
      }
    }

    const getResult = (number1: number, number2: number, number3: number) => {
      const first = new BigJS(number1 || 1)
      const second = new BigJS(number2 || 1)
      const third = new BigJS(number3 || 1)

      return first.minus(second).div(third).toFixed(4).valueOf()
    }

    const prevPeriod = getResult(
      Number(formValue[IndicatorsEnum.INDICATOR_EQUITY_0]),
      Number(formValue[IndicatorsEnum.INDICATOR_FIXED_ASSETS_0]),
      Number(formValue[IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0])
    )
    const beforePrevPeriod = getResult(
      Number(formValue[IndicatorsEnum.INDICATOR_EQUITY_1]),
      Number(formValue[IndicatorsEnum.INDICATOR_FIXED_ASSETS_1]),
      Number(formValue[IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1])
    )

    return {
      prevPeriod,
      beforePrevPeriod,
    }
  }, [formValue])

  return (
    <>
      <Typography marginTop={10} marginBottom={2} variant="h4">
        Динамика
      </Typography>
      <Typography marginBottom={1} variant="body1">
        Расчет коэффициентов, предусматривающих изменения показателя в динамике
      </Typography>
      <Typography marginBottom={4} variant="body1">
        (0) - предыдущий период
        <br />
        (1) - период перед предыдущим
      </Typography>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={formValue}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Собственный капитал (0)"
                name={IndicatorsEnum.INDICATOR_EQUITY_0}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Внеоборотные активы (0)"
                name={IndicatorsEnum.INDICATOR_FIXED_ASSETS_0}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Оборотные активы (0)"
                name={IndicatorsEnum.INDICATOR_CURRENT_ASSETS_0}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Собственный капитал (1)"
                name={IndicatorsEnum.INDICATOR_EQUITY_1}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Внеоборотные активы (1)"
                name={IndicatorsEnum.INDICATOR_FIXED_ASSETS_1}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Оборотные активы (1)"
                name={IndicatorsEnum.INDICATOR_CURRENT_ASSETS_1}
                type="number"
              />
            </LiquidityFormItem>
          </Grid>

          <Button
            sx={{ marginTop: 4 }}
            type="submit"
            size="large"
            variant="outlined"
          >
            Расчитать
          </Button>
        </Form>
      </Formik>
      <Typography marginTop={10} marginBottom={2} variant="h4">
        Коэффициент обеспеченности собственными оборотными средствами
      </Typography>

      {!!beforePrevPeriod && !!prevPeriod && (
        <TableContainer sx={{ marginTop: 4 }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                <TableCell align="right">{prevPeriod}</TableCell>
                <TableCell align="right">{beforePrevPeriod}</TableCell>
                <TableCell align="right">
                  {currentPeriodValue || '---'}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
