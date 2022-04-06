import React from 'react'
import { styled } from '@mui/system'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { Button, Grid } from '@mui/material'
import { InputField } from '../../../common/components/InputField/InputField'
import { IndicatorsEnum } from '../../../utils/indicators'
import { COMMON_VALIDATION } from '../../../utils/validation'

const FinancialIndependenceFormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

const FinancialIndependenceFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_EQUITY]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_VB]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_LTD]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]: COMMON_VALIDATION,
})

export interface IFinancialIndependenceFormState {
  [IndicatorsEnum.INDICATOR_EQUITY]: string
  [IndicatorsEnum.INDICATOR_VB]: string
  [IndicatorsEnum.INDICATOR_LTD]: string
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: string
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: string
  [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]: string
}

export interface IFinancialIndependenceFormProps {
  financialIndependence: IFinancialIndependenceFormState
}

export const FinancialIndependenceForm: React.FC<
  IFinancialIndependenceFormProps
> = ({ financialIndependence }) => {
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: IFinancialIndependenceFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }

  return (
    <FinancialIndependenceFormWrapper>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={financialIndependence}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Собственный капитал"
                name={IndicatorsEnum.INDICATOR_EQUITY}
                type="number"
              />
            </FinancialIndependenceFormItem>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Валюта баланса"
                name={IndicatorsEnum.INDICATOR_VB}
                type="number"
              />
            </FinancialIndependenceFormItem>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Долгосрочные обязательства"
                name={IndicatorsEnum.INDICATOR_LTD}
                type="number"
              />
            </FinancialIndependenceFormItem>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Оборотные активы"
                name={IndicatorsEnum.INDICATOR_CURRENT_ASSETS}
                type="number"
              />
            </FinancialIndependenceFormItem>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Внеоборотные активы"
                name={IndicatorsEnum.INDICATOR_FIXED_ASSETS}
                type="number"
              />
            </FinancialIndependenceFormItem>
            <FinancialIndependenceFormItem item xs={6}>
              <InputField
                label="Краткосрочные обязательства"
                name={IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE}
                type="number"
              />
            </FinancialIndependenceFormItem>
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
    </FinancialIndependenceFormWrapper>
  )
}
