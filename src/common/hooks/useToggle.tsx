import { useCallback, useState } from 'react'

export function useToggle(initialValue?: boolean) {
  const [toggler, setToggler] = useState(!!initialValue)

  const toggle = useCallback(() => {
    setToggler((prev) => !prev)
  }, [])

  const set = useCallback(() => {
    setToggler(true)
  }, [])

  const unset = useCallback(() => {
    setToggler(false)
  }, [])

  return {
    value: toggler,
    toggle,
    set,
    unset,
  }
}
