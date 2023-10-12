type ClassName = string
type ClassNamesConditional = Record<string, boolean>
type ClassNamesProps = (ClassName | ClassNamesConditional)[]

export const classNames = (...args: ClassNamesProps) => {
  return args
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
