import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export interface IRedirectProps {
  to: string
}

export const Redirect: React.FC<IRedirectProps> = ({ to }) => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(to)
    // eslint-disable-next-line
  }, [])

  return null
}
