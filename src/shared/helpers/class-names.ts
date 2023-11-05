type ClassNamesProps = (string | Record<string, boolean> | undefined)[]

export const classNames = (...args: ClassNamesProps) => {
  return args
    .filter(Boolean)
    .map((el) => {
      if (typeof el === 'string') {
        return el
      }
      return Object.entries(el)
        .filter(([, condition]) => condition)
        .map(([className]) => className)
        .join(' ')
    })
    .join(' ')
}

export default classNames
