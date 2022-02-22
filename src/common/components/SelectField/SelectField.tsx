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
  options?: { label: string; value: string }[]
}

export const SelectField: React.FC<ISelectFieldProps> = ({
  name,
  options,
  label,
  ...otherProps
}) => {
  const [_, meta, helpers] = useField(name)

  const handleSelectChange = (e: any) => {
    helpers.setTouched(true)
    helpers.setValue(e.target.value)
  }

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id={name}>{label}</InputLabel>

      <Select
        {...otherProps}
        labelId={name}
        value={meta.value ?? ''}
        onChange={handleSelectChange}
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
