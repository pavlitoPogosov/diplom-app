import React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material'
import { useField } from 'formik'

export interface ISelectFieldProps extends SelectProps {
  name: string
  errorText?: string
  options?: { label: string; value: string }[]
}

export const SelectField: React.FC<ISelectFieldProps> = ({
  name,
  options,
  errorText,
  label,
  ...otherProps
}) => {
  const [_, meta, helpers] = useField(name)

  const handleSelectChange = (e: any) => {
    helpers.setTouched(true)
    helpers.setValue(e.target.value)
  }

  const error = !!meta.touched && !!meta.error

  return (
    <FormControl error={error} fullWidth>
      <InputLabel id={name}>
        {!error ? label : errorText || meta.error}
      </InputLabel>

      <Select
        {...otherProps}
        label={!error ? label : errorText || meta.error}
        labelId={name}
        id={`select-${name}`}
        value={meta.value ?? ''}
        onChange={handleSelectChange}
        error={error}
      >
        {options?.map(({ label, value }, i) => (
          <MenuItem value={value} key={value + i}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
