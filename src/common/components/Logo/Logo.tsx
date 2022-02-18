import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',

  h5: {
    marginLeft: 12,
    fontWeight: 500,
  },
})

export interface ILogoProps {}

export const Logo: React.FC<ILogoProps> = () => {
  return (
    <LogoContainer>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
          fill="#605BFF"
        />
      </svg>

      <Typography variant="h5">Formula</Typography>
    </LogoContainer>
  )
}
