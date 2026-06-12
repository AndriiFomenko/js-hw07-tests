import { DateCalculator } from '../main.js'
import { code } from './prepareTestEnvironment.js'

describe('Code tests for DateCalculator', () => {
  let calculator

  beforeEach(() => {
    // Створення екземпляра калькулятора дат з фіксованою початковою датою
    calculator = new DateCalculator('2023-01-01')
  })

  test('Adds days correctly', () => {
    calculator.addDays(10)
    expect(calculator.getResult()).toBe('2023-01-11')
  })

  test('Subtracts days correctly', () => {
    calculator.subtractDays(1)
    expect(calculator.getResult()).toBe('2022-12-31')
  })

  test('Handles combination of addition and subtraction correctly', () => {
    calculator.addDays(5)
    calculator.subtractDays(3)
    expect(calculator.getResult()).toBe('2023-01-03')
  })

  test('File should use "function" for DateCalculator', () => {
    expect(DateCalculator.toString().trim().startsWith('function')).toBeTruthy()
  })

  test('Class should not be defined with "class" keyword', () => {
    expect(DateCalculator.toString().trim().startsWith('class')).toBeFalsy()
  })

  test('Should declare "this.addDays" method', () => {
    expect(typeof calculator.addDays).toBe('function')
  })

  test('Should declare "this.subtractDays" method', () => {
    expect(typeof calculator.subtractDays).toBe('function')
  })

  test('Should declare "this.getResult" method', () => {
    expect(typeof calculator.getResult).toBe('function')
  })
})
