import React from 'react'
import { styled } from '@mui/system'
import { Form, Formik } from 'formik'
import { Button, Grid } from '@mui/material'
import * as yup from 'yup'

import { InputField } from '../../../common/components/InputField/InputField'
import { IndicatorsEnum } from '../../../utils/indicators'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { COMMON_VALIDATION } from '../../../utils/validation'

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_SFI]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_EQUITY]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_BANKROLL]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_STO]: COMMON_VALIDATION,
})

const LiquidityFormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

const LiquidityFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface ILiquidityFormState {
  [IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE]: string
  [IndicatorsEnum.INDICATOR_BANKROLL]: string
  [IndicatorsEnum.INDICATOR_CURRENT_ASSETS]: string
  [IndicatorsEnum.INDICATOR_EQUITY]: string
  [IndicatorsEnum.INDICATOR_FIXED_ASSETS]: string
  [IndicatorsEnum.INDICATOR_SFI]: string
  [IndicatorsEnum.INDICATOR_STO]: string
}

export interface ILiquidityFormProps {
  liquidity: ILiquidityFormState
}

export const LiquidityForm: React.FC<ILiquidityFormProps> = ({ liquidity }) => {
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: ILiquidityFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }
  return (
    <LiquidityFormWrapper>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={liquidity}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Краткоросные финансовые вложения"
                name={IndicatorsEnum.INDICATOR_SFI}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Собственный капитал"
                name={IndicatorsEnum.INDICATOR_EQUITY}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Денежные средства"
                name={IndicatorsEnum.INDICATOR_BANKROLL}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Оборотные активы"
                name={IndicatorsEnum.INDICATOR_CURRENT_ASSETS}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Внеоборотные активы"
                name={IndicatorsEnum.INDICATOR_FIXED_ASSETS}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Краткосрочные обязательства"
                name={IndicatorsEnum.INDICATOR_ACCOUNTS_RECEIVABLE}
                type="number"
              />
            </LiquidityFormItem>
            <LiquidityFormItem item xs={6}>
              <InputField
                label="Дебиторская задолженность"
                name={IndicatorsEnum.INDICATOR_STO}
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
    </LiquidityFormWrapper>
  )
}
