import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { IAnalisItem } from '../../../utils/analys/liquidityAnalys'

export interface IAnalysResultsProps {
  analys: IAnalisItem[]
  isPercentage?: boolean
}

export const AnalysResults: React.FC<IAnalysResultsProps> = ({
  analys,
  isPercentage,
}) => {
  if (!analys.length) return null
  return (
    <>
      <Typography sx={{ marginTop: 10, marginBottom: 2 }} variant="h4">
        Результаты
      </Typography>
      {analys.map(({ name, helpText, value, color }) => (
        <Accordion key={name} sx={{ marginBottom: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '80%', flexShrink: 0 }}>
              {name}
              <span style={{ marginLeft: 12, color }}>
                {Number(value) ? parseFloat(Number(value).toFixed(5)) : ''}
                {isPercentage ? '%' : ''}
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{helpText}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  )
}
