import * as yup from 'yup'

export const COMMON_VALIDATION = yup
  .string()
  .required('Введите значение')
  .trim('Введите значение')
  .min(1)
