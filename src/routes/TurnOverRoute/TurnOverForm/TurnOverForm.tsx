import React from 'react'
import { styled } from '@mui/system'
import { Button, Grid } from '@mui/material'
import * as yup from 'yup'

import { IndicatorsEnum } from '../../../utils/indicators'
import { COMMON_VALIDATION } from '../../../utils/validation'
import { InputField } from '../../../common/components/InputField/InputField'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { Form, Formik } from 'formik'

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_REVENUE]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_VB]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: COMMON_VALIDATION,
})

const TurnOverFormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

const TurnOverFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface ITurnOverFormState {
  [IndicatorsEnum.INDICATOR_REVENUE]: string
  [IndicatorsEnum.INDICATOR_VB]: string
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: string
}

export interface ITurnOverFormProps {
  turnover: ITurnOverFormState
}

export const TurnOverForm: React.FC<ITurnOverFormProps> = ({ turnover }) => {
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: ITurnOverFormState) => {
    console.log(values)
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }

  return (
    <TurnOverFormWrapper>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={turnover}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <TurnOverFormItem item xs={6}>
              <InputField
                label="Выручка"
                name={IndicatorsEnum.INDICATOR_REVENUE}
                type="number"
              />
            </TurnOverFormItem>
            <TurnOverFormItem item xs={6}>
              <InputField
                label="Валюта баланса"
                name={IndicatorsEnum.INDICATOR_VB}
                type="number"
              />
            </TurnOverFormItem>
            <TurnOverFormItem item xs={6}>
              <InputField
                label="Оборотные активы"
                name={IndicatorsEnum.INDICATOR_CURRENT_ASSETS}
                type="number"
              />
            </TurnOverFormItem>
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
    </TurnOverFormWrapper>
  )
}
