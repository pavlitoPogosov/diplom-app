import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

import LogoSrc from './logo.png'

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',

  h5: {
    marginLeft: 12,
    fontWeight: 700,
    fontSize: 32,
    color: 'rgb(41, 38, 68)',
  },
})

const LogoImg = styled('img')({
  width: 64,
  height: 64,
})

export interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = () => {
  return (
    <LogoContainer>
      <LogoImg src={LogoSrc} alt="" />

      <Typography variant="h5">BRA</Typography>
    </LogoContainer>
  )
}
