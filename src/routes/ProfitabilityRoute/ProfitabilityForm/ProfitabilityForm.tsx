import React from 'react'
import { Button, Grid } from '@mui/material'
import { styled } from '@mui/system'
import * as yup from 'yup'

import { IndicatorsEnum } from '../../../utils/indicators'
import { COMMON_VALIDATION } from '../../../utils/validation'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { Form, Formik } from 'formik'
import { InputField } from '../../../common/components/InputField/InputField'

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_PRIME_COST]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_VB]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_REVENUE]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_PRIME_COST]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_EQUITY]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_LTD]: COMMON_VALIDATION,
})

const ProfitabilityFormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

const ProfitabilityFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface IProfitabilityFormState {
  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT]: string
  [IndicatorsEnum.INDICATOR_PRIME_COST]: string
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES]: string
  [IndicatorsEnum.INDICATOR_VB]: string
  [IndicatorsEnum.INDICATOR_REVENUE]: string
  [IndicatorsEnum.INDICATOR_PRIME_COST]: string
  [IndicatorsEnum.INDICATOR_EQUITY]: string
  [IndicatorsEnum.INDICATOR_LTD]: string
}

export interface IProfitabilityFormProps {
  profitability: IProfitabilityFormState
}

export const ProfitabilityForm: React.FC<IProfitabilityFormProps> = ({
  profitability,
}) => {
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: IProfitabilityFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }

  return (
    <ProfitabilityFormWrapper>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={profitability}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Чистая прибыль"
                name={IndicatorsEnum.INDICATOR_CLEAR_PROFIT}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Валюта баланса"
                name={IndicatorsEnum.INDICATOR_VB}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Выручка"
                name={IndicatorsEnum.INDICATOR_REVENUE}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Себестоимость"
                name={IndicatorsEnum.INDICATOR_PRIME_COST}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Прочие расходы"
                name={IndicatorsEnum.INDICATOR_OTHER_EXPENSES}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Собственный капитал"
                name={IndicatorsEnum.INDICATOR_EQUITY}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="Долгосрочные обязательства"
                name={IndicatorsEnum.INDICATOR_LTD}
                type="number"
              />
            </ProfitabilityFormItem>
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
    </ProfitabilityFormWrapper>
  )
}
