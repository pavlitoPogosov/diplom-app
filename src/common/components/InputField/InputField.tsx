import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { useField } from 'formik'

export type TInputFieldProps = TextFieldProps & {
  name: string
  errorText?: string
}

export const InputField: React.FC<TInputFieldProps> = ({
  name,
  errorText,
  size = 'medium',
  variant = 'outlined',
  ...otherProps
}) => {
  const [field, meta] = useField(name)
  const error = !!meta.touched && !!meta.error
  return (
    <TextField
      {...otherProps}
      {...field}
      InputProps={{
        autoComplete: 'off',
        autoCorrect: 'off',
        ...otherProps.InputProps,
      }}
      value={field.value || ''}
      size={size}
      name={name}
      error={error}
      helperText={!error ? otherProps.helperText : errorText || meta.error}
      variant={variant}
      sx={{ width: '100%' }}
    />
  )
}
