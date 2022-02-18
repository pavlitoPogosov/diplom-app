import React from 'react'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import {
  FINANCIAL_INDEPENDENCE_ROUTE,
  LIQUIDITY_ROUTE,
  PRIMARY_ANALYSIS_ROUTE,
  PROFITABILITY_ROUTE,
  TURNOVER_ROUTE,
} from '../../../utils/routes'
import { Logo } from '../Logo/Logo'

const SIDEBAR_LINKS: { text: string; link: string }[] = [
  {
    text: 'Ликвидность',
    link: LIQUIDITY_ROUTE,
  },
  {
    text: 'Финансовая независимость',
    link: FINANCIAL_INDEPENDENCE_ROUTE,
  },
  {
    text: 'Рентабельность',
    link: PROFITABILITY_ROUTE,
  },
  {
    text: 'Оборачиваемость',
    link: TURNOVER_ROUTE,
  },
  {
    text: 'Первичный анализ',
    link: PRIMARY_ANALYSIS_ROUTE,
  },
]

const SidebarContainerCmp = styled('aside')(({ theme }) => ({
  width: 324,
  maxWidth: 324,
  minWidth: 324,
  background: '#fff',
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  borderRight: '1px solid #e7e7e7',
}))

const SidebarList = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

const SidebarListItem = styled<any>('li')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: '#2c2c2c',
  opacity: 0.7,
  transition: 'all .25s',
  display: 'flex',
  marginBottom: theme.spacing(1),

  '&:hover, &.active': {
    backgroundColor: '#ebebfc',
    color: '#3c36f3',
  },
}))

const SidebarLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1.5),
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: 18,
  color: 'inherit',
  display: 'block',
  flexGrow: 1,
  lineHeight: '22px',
}))

const SidebarLogoWrapper = styled('div')({
  margin: '0 auto 64px 0',

  display: 'flex',
  justifyContent: 'center',
})

export interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = () => {
  const location = useLocation()

  return (
    <SidebarContainerCmp>
      <SidebarLogoWrapper>
        <Logo />
      </SidebarLogoWrapper>

      <nav>
        <SidebarList>
          {SIDEBAR_LINKS.map(({ text, link }) => (
            <SidebarListItem
              className={link === location.pathname ? 'active' : undefined}
              key={link}
            >
              <SidebarLink to={link}>{text}</SidebarLink>
            </SidebarListItem>
          ))}
        </SidebarList>
      </nav>
    </SidebarContainerCmp>
  )
}
