import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material'

import { Sidebar } from '../../common/components/Sidebar/Sidebar'

export interface IMainLayoutProps {
  title?: string
}

const WrapperCmp = styled('main')({
  display: 'flex',
  minHeight: '100vh',
})

const ContainerCmp = styled('section')(({ theme }) => ({
  boxShadow: (theme.shadows as any)[4],
  backgroundColor: theme.palette.mode,
  display: 'flex',
  flexGrow: 1,
}))

const InnerCmp = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#FAFAFB',
  flexGrow: 1,
}))

const ChildrenWrapperCmp = styled('div')({
  maxWidth: 1020,
})

export const MainLayout: React.FC<IMainLayoutProps> = ({ children, title }) => {
  return (
    <WrapperCmp>
      <ContainerCmp>
        <Sidebar />
        <InnerCmp>
          <ChildrenWrapperCmp>
            {title && <Typography variant="h4">{title}</Typography>}
            {children}
          </ChildrenWrapperCmp>
        </InnerCmp>
      </ContainerCmp>
    </WrapperCmp>
  )
}
