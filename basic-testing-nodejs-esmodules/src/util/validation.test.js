import { it, expect, describe } from 'vitest';
import { validateNumber } from './validation';
import { validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error, if an empty string is provided', () => {
    const input = ''

    const validationFn = () => validateStringNotEmpty(input)

    expect(validationFn).toThrow()
  })

  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = ''

    const validationFn = () => validateStringNotEmpty(input)

    expect(validationFn).toThrow(/must not be empty/)
  })

  it('should throw an error, if a long string of blank characters is provided', () => {
    const input = '                '

    const validationFn = () => validateStringNotEmpty(input)

    expect(validationFn).toThrow()
  })
})

describe('validateNumber()', () => {
  it('should throw an error, if an invalid number is provided', () => {
    const input = 'test'

    const validationFn = () => validateNumber(input)

    expect(validationFn).toThrow()
  })

  it('should not throw an error, if a valid number is provided', () => {
    const input = 1

    const validationFn = () => validateNumber(input)

    expect(validationFn).not.toThrow()
  })
})