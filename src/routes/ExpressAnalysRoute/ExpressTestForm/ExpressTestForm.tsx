import React, { useMemo } from 'react'
import { Form, Formik } from 'formik'

import { IExpressTestQuestion } from '../../../redux/slices/expressTestSlice'
import { SelectField } from '../../../common/components/SelectField/SelectField'
import { Grid } from '@mui/material'

export interface IExpressTestFormProps {
  questions: IExpressTestQuestion[]
}

export const ExpressTestForm: React.FC<IExpressTestFormProps> = ({
  questions,
}) => {
  const preparedQuestions = useMemo(() => {
    return questions.map(({ answers, question }) => ({
      question,
      answers: answers.map(({ result, text }) => ({
        value: result,
        label: text,
      })),
    }))
  }, [questions])

  const handleFormSubmit = (values: any) => {
    // dispatch(
    //   updateCalculationsValuesAC({
    //     values,
    //   })
    // )
  }

  return (
    <Formik initialValues={{}} onSubmit={handleFormSubmit}>
      <Form>
        <Grid container spacing={2} sx={{ marginTop: 4 }}>
          {preparedQuestions.map(({ answers, question }, i) => (
            <Grid key={i + question} item xs={6}>
              <SelectField name="hello" label={question} options={answers} />
            </Grid>
          ))}
        </Grid>
      </Form>
    </Formik>
  )
}
