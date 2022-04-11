import React, { useMemo } from 'react'
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
import { styled } from '@mui/system'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { InputField } from '../../../common/components/InputField/InputField'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { financialIndependenceDinamicFormSelector } from '../../../redux/slices/calculationsSlice/selectors'
import { IndicatorsEnum } from '../../../utils/indicators'

const FormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
}))

const FormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface IDinamicFormState {
  [IndicatorsEnum.INDICATOR_EQUITY_0]: string
  [IndicatorsEnum.INDICATOR_VB_0]: string
  [IndicatorsEnum.INDICATOR_EQUITY_1]: string
  [IndicatorsEnum.INDICATOR_VB_1]: string
}

const FORM_VALIDATION_SCHEMA = yup.object().shape({})

export interface IDinamicFormProps {
  currentPeriodValue: string
}

export const DinamicForm: React.FC<IDinamicFormProps> = ({
  currentPeriodValue,
}) => {
  const dispatch = useTypedDispatch()
  const formValue = useTypedSelector(financialIndependenceDinamicFormSelector)

  const handleFormSubmit = (values: IDinamicFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }

  const { beforePrevPeriod, prevPeriod } = useMemo(() => {
    if (!Object.values(formValue).filter(Boolean).length) {
      return {
        beforePrevPeriod: null,
        prevPeriod: null,
      }
    }

    const getResult = (number1: number, number2: number) => {
      const first = new BigJS(number1 || 1)
      const second = new BigJS(number2 || 1)

      return first.div(second).valueOf()
    }

    const prevPeriod = getResult(
      Number(formValue[IndicatorsEnum.INDICATOR_EQUITY_0]),
      Number(formValue[IndicatorsEnum.INDICATOR_VB_0])
    )
    const beforePrevPeriod = getResult(
      Number(formValue[IndicatorsEnum.INDICATOR_EQUITY_0]),
      Number(formValue[IndicatorsEnum.INDICATOR_VB_0])
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

      <FormWrapper>
        <Formik
          validationSchema={FORM_VALIDATION_SCHEMA}
          initialValues={formValue}
          onSubmit={handleFormSubmit}
          enableReinitialize
        >
          <Form>
            <Grid container spacing={2}>
              <FormItem item xs={6}>
                <InputField
                  label="Собственный капитал (0)"
                  name={IndicatorsEnum.INDICATOR_EQUITY_0}
                  type="number"
                />
              </FormItem>
              <FormItem item xs={6}>
                <InputField
                  label="Валюта баланса (0)"
                  name={IndicatorsEnum.INDICATOR_VB_0}
                  type="number"
                />
              </FormItem>
              <FormItem item xs={6}>
                <InputField
                  label="Собственный капитал (1)"
                  name={IndicatorsEnum.INDICATOR_EQUITY_1}
                  type="number"
                />
              </FormItem>
              <FormItem item xs={6}>
                <InputField
                  label="Валюта баланса (1)"
                  name={IndicatorsEnum.INDICATOR_VB_1}
                  type="number"
                />
              </FormItem>
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
      </FormWrapper>

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
