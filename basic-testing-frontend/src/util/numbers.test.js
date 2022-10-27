import { transformToNumber } from "./numbers";
import { it, expect } from 'vitest';

it('should transform a string number to integer type', () => {
  const input = "1"
  const result = transformToNumber(input)

  expect(result).toBeTypeOf("number")
  expect(result).toBe(+input)
})

it('should yield NaN if argument cannot be transformed', () => {
  const input = 'test'
  const input2 = {}
  const result = transformToNumber(input)
  const result2 = transformToNumber(input2)

  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})