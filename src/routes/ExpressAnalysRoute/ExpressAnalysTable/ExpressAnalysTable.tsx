import React from 'react'
import { Typography } from '@mui/material'

import { IExpressAnalysFormState } from '../ExpressAnalysForm/ExpressAnalysForm'

const isReadyToDisplay = (values: IExpressAnalysFormState) => {
  return (
    values.TEST_CHILD_CMP !== '' &&
    values.TEST_CHS !== '' &&
    values.TEST_DATE_REGISTER !== '' &&
    values.TEST_GD !== '' &&
    values.TEST_HL !== '' &&
    values.TEST_MA !== '' &&
    values.TEST_MU !== '' &&
    values.TEST_NL !== '' &&
    values.TEST_OKVED !== '' &&
    values.TEST_PL !== '' &&
    values.TEST_QUALITY !== '' &&
    values.TEST_SMI_INFO !== ''
  )
}

export interface IExpressAnalysTableProps {
  expressAnalys: IExpressAnalysFormState
}

export const ExpressAnalysTable: React.FC<IExpressAnalysTableProps> = ({
  expressAnalys,
}) => {
  if (!isReadyToDisplay(expressAnalys)) return null
  console.log(expressAnalys)
  return (
    <>
      <Typography sx={{ marginTop: 10, marginBottom: 2 }} variant="h4">
        Результаты
      </Typography>
    </>
  )
}
