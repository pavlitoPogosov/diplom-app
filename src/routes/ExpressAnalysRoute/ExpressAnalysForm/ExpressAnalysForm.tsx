import React from 'react'
import { styled } from '@mui/system'
import * as yup from 'yup'

import { COMMON_VALIDATION } from '../../../utils/validation'
import { IndicatorsEnum } from '../../../utils/indicators'
import { useTypedDispatch } from '../../../redux/hooks/useTypedDispatch'
import { updateCalculationsValuesAC } from '../../../redux/slices/calculationsSlice/actionCreators'
import { Button, Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import { SelectField } from '../../../common/components/SelectField/SelectField'

const DURATION_OPTIONS = [
  {
    label: 'Менее 2 лет',
    value: 'Менее 2 лет',
  },
  {
    label: 'Более 2 лет',
    value: 'Более 2 лет',
  },
]

const USUAL_OPTIONS = [
  {
    label: 'Да',
    value: 'Да',
  },
  {
    label: 'Нет',
    value: 'Нет',
  },
]

const BOOLEAN_OPTIONS = [
  {
    label: 'Плохое',
    value: 'Плохое',
  },
  {
    label: 'Хорошее',
    value: 'Хорошее',
  },
]

const FORM_VALIDATION_SCHEMA = yup.object().shape({
  [IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_SMI_INFO]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_OKVED]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_GD]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_CHILD_CMP]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_QUALITY]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_CHS]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_MU]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_MA]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_NL]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_PL]: COMMON_VALIDATION,
  [IndicatorsEnum.INDICATOR_TEST_HL]: COMMON_VALIDATION,
})

const ExpressAnalysFormWrapper = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(9),
}))

const ExpressAnalysFormItem = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}))

export interface IExpressAnalysFormState {
  [IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER]: string
  [IndicatorsEnum.INDICATOR_TEST_SMI_INFO]: string
  [IndicatorsEnum.INDICATOR_TEST_OKVED]: string
  [IndicatorsEnum.INDICATOR_TEST_GD]: string
  [IndicatorsEnum.INDICATOR_TEST_CHILD_CMP]: string
  [IndicatorsEnum.INDICATOR_TEST_QUALITY]: string
  [IndicatorsEnum.INDICATOR_TEST_CHS]: string
  [IndicatorsEnum.INDICATOR_TEST_MU]: string
  [IndicatorsEnum.INDICATOR_TEST_MA]: string
  [IndicatorsEnum.INDICATOR_TEST_NL]: string
  [IndicatorsEnum.INDICATOR_TEST_PL]: string
  [IndicatorsEnum.INDICATOR_TEST_HL]: string
}

export interface IExpressAnalysFormProps {
  expressAnalys: IExpressAnalysFormState
}

export const ExpressAnalysForm: React.FC<IExpressAnalysFormProps> = ({
  expressAnalys,
}) => {
  const dispatch = useTypedDispatch()

  const handleFormSubmit = (values: IExpressAnalysFormState) => {
    dispatch(
      updateCalculationsValuesAC({
        values,
      })
    )
  }

  return (
    <ExpressAnalysFormWrapper>
      <Formik
        validationSchema={FORM_VALIDATION_SCHEMA}
        initialValues={expressAnalys}
        onSubmit={handleFormSubmit}
        enableReinitialize
      >
        <Form>
          <Grid container spacing={2}>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Дата регистрации"
                name={IndicatorsEnum.INDICATOR_TEST_DATE_REGISTER}
                options={DURATION_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Информация в СМИ"
                name={IndicatorsEnum.INDICATOR_TEST_SMI_INFO}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>

            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Разноплановый ОКВЭД"
                name={IndicatorsEnum.INDICATOR_TEST_OKVED}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Одновременная смена учредителей и ГД"
                name={IndicatorsEnum.INDICATOR_TEST_GD}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>

            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Дочерние/головные организации"
                name={IndicatorsEnum.INDICATOR_TEST_CHILD_CMP}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Качество контрагентов"
                name={IndicatorsEnum.INDICATOR_TEST_QUALITY}
                options={BOOLEAN_OPTIONS}
              />
            </ExpressAnalysFormItem>

            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Включение в различные ЧС"
                name={IndicatorsEnum.INDICATOR_TEST_CHS}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Массовый учредитель"
                name={IndicatorsEnum.INDICATOR_TEST_MU}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>

            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Массовый адрес регистрации"
                name={IndicatorsEnum.INDICATOR_TEST_MA}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Вхождение в различные негативные списки"
                name={IndicatorsEnum.INDICATOR_TEST_NL}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>

            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Вхождение в различные позитивные списки "
                name={IndicatorsEnum.INDICATOR_TEST_PL}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
            <ExpressAnalysFormItem item xs={6}>
              <SelectField
                label="Наличие лицензий"
                name={IndicatorsEnum.INDICATOR_TEST_HL}
                options={USUAL_OPTIONS}
              />
            </ExpressAnalysFormItem>
          </Grid>

          <Button
            sx={{ marginTop: 4 }}
            type="submit"
            size="large"
            variant="outlined"
          >
            Получить анализ
          </Button>
        </Form>
      </Formik>
    </ExpressAnalysFormWrapper>
  )
}

// []: string
// [IndicatorsEnum.INDICATOR_TEST_SMI_INFO]: string
// [IndicatorsEnum.INDICATOR_TEST_OKVED]: string
// [IndicatorsEnum.INDICATOR_TEST_GD]: string
// [IndicatorsEnum.INDICATOR_TEST_CHILD_CMP]: string
// [IndicatorsEnum.INDICATOR_TEST_QUALITY]: string
// [IndicatorsEnum.INDICATOR_TEST_CHS]: string
// [IndicatorsEnum.INDICATOR_TEST_MU]: string
// [IndicatorsEnum.INDICATOR_TEST_MA]: string
// [IndicatorsEnum.INDICATOR_TEST_NL]: string
// [IndicatorsEnum.INDICATOR_TEST_PL]: string
// [IndicatorsEnum.INDICATOR_TEST_HL]: string
