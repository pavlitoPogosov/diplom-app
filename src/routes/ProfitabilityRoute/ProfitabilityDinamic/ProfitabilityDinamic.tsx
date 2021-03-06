import { Button, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { InputField } from '../../../common/components/InputField/InputField'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { profitabilityDinamicFormSelector } from '../../../redux/slices/calculationsSlice/selectors'
import { IndicatorsEnum } from '../../../utils/indicators'
import { COMMON_VALIDATION } from '../../../utils/validation'
import { ProfitabilityCharts } from '../ProfitabilityCharts/ProfitabilityCharts'

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_VB_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_REVENUE_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_PRIME_COST_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_EQUITY_0]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_LTD_0]: COMMON_VALIDATION,

  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_VB_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_REVENUE_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_PRIME_COST_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_EQUITY_1]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_LTD_1]: COMMON_VALIDATION,
})

export interface IProfitabilityDinamicFormState {
  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0]: string
  [IndicatorsEnum.INDICATOR_VB_0]: string
  [IndicatorsEnum.INDICATOR_REVENUE_0]: string
  [IndicatorsEnum.INDICATOR_PRIME_COST_0]: string
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_0]: string
  [IndicatorsEnum.INDICATOR_EQUITY_0]: string
  [IndicatorsEnum.INDICATOR_LTD_0]: string

  [IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1]: string
  [IndicatorsEnum.INDICATOR_VB_1]: string
  [IndicatorsEnum.INDICATOR_REVENUE_1]: string
  [IndicatorsEnum.INDICATOR_PRIME_COST_1]: string
  [IndicatorsEnum.INDICATOR_OTHER_EXPENSES_1]: string
  [IndicatorsEnum.INDICATOR_EQUITY_1]: string
  [IndicatorsEnum.INDICATOR_LTD_1]: string
}

const ProfitabilityFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface IProfitabilityDinamicProps {}

export const ProfitabilityDinamic: React.FC<
  IProfitabilityDinamicProps
> = () => {
  const formValue = useTypedSelector(profitabilityDinamicFormSelector)
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: IProfitabilityDinamicFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      }) as any
    )
  }

  return (
    <>
      <Typography marginTop={10} marginBottom={2} variant="h4">
        ????????????????
      </Typography>
      <Typography marginBottom={1} variant="body1">
        ???????????? ??????????????????????????, ?????????????????????????????????? ?????????????????? ???????????????????? ?? ????????????????
      </Typography>
      <Typography marginBottom={4} variant="body1">
        (0) - ???????????????????? ????????????
        <br />
        (1) - ???????????? ?????????? ????????????????????
      </Typography>

      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={formValue}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (0)"
                name={IndicatorsEnum.INDICATOR_CLEAR_PROFIT_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (0)"
                name={IndicatorsEnum.INDICATOR_VB_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????? (0)"
                name={IndicatorsEnum.INDICATOR_REVENUE_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????????????????? (0)"
                name={IndicatorsEnum.INDICATOR_PRIME_COST_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (0)"
                name={IndicatorsEnum.INDICATOR_OTHER_EXPENSES_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????????????? ?????????????? (0)"
                name={IndicatorsEnum.INDICATOR_EQUITY_0}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????????????????? ?????????????????????????? (0)"
                name={IndicatorsEnum.INDICATOR_LTD_0}
                type="number"
              />
            </ProfitabilityFormItem>

            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (1)"
                name={IndicatorsEnum.INDICATOR_CLEAR_PROFIT_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (1)"
                name={IndicatorsEnum.INDICATOR_VB_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????? (1)"
                name={IndicatorsEnum.INDICATOR_REVENUE_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????????????????? (1)"
                name={IndicatorsEnum.INDICATOR_PRIME_COST_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????? ?????????????? (1)"
                name={IndicatorsEnum.INDICATOR_OTHER_EXPENSES_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="?????????????????????? ?????????????? (1)"
                name={IndicatorsEnum.INDICATOR_EQUITY_1}
                type="number"
              />
            </ProfitabilityFormItem>
            <ProfitabilityFormItem item xs={6}>
              <InputField
                label="???????????????????????? ?????????????????????????? (1)"
                name={IndicatorsEnum.INDICATOR_LTD_1}
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
            ??????????????????
          </Button>
        </Form>
      </Formik>

      <ProfitabilityCharts />
    </>
  )
}
