type ClassNamesProp = string | Record<string, boolean> | undefined

export const classNames = (...args: ClassNamesProp[]) => {
  return args
    .filter(Boolean)
    .map((el: Exclude<ClassNamesProp, undefined>) => {
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
