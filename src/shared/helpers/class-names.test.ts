import cn from 'shared/helpers/class-names'

describe('classNames', () => {
  test('test single class', () => {
    const expectedResult = 'some-class-name'
    expect(cn(expectedResult)).toBe(expectedResult)
  })

  test('test multiple classes', () => {
    const expectedResult = 'class1 class2 class3'
    expect(cn('class1', 'class2', 'class3')).toBe(expectedResult)
  })

  test('test conditional classes', () => {
    const expectedResult = 'class1 class3'
    expect(cn({ class1: true, class2: false, class3: true })).toBe(expectedResult)
  })

  test('test mixed input', () => {
    const expectedResult = 'class1 class2 class4'
    expect(cn('class1', { class2: true, class3: false }, 'class4')).toBe(expectedResult)
  })

  test('test empty inpu t', () => {
    const expectedResult = ''
    expect(cn()).toBe(expectedResult)
  })

  test('test empty object input', () => {
    const expectedResult = ''
    expect(cn({})).toBe(expectedResult)
  })
})
