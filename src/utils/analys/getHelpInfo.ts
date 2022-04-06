interface IHelpTextVariants {
  normal?: string
  minimal?: string
  maximal?: string
}

export const getHelpInfo = (
  value: number | string,
  min: number,
  max: number,
  helpTextVariants: IHelpTextVariants
) => {
  let color = ''
  let helpText = ''

  if (value >= min && value <= max) {
    helpText += helpTextVariants.normal
    color = 'green'
  } else if (value < min) {
    helpText += helpTextVariants.minimal
    color = '#D4AC0D'
  } else if (value > min) {
    helpText += helpTextVariants.maximal
    color = 'red'
  }

  return {
    helpText,
    color,
  }
}
