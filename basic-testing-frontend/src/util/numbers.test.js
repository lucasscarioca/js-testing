import { cleanNumbers, transformToNumber } from "./numbers";
import { it, expect, describe } from 'vitest';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2']

    const result = cleanNumbers(numberValues);

    expect(result).toEqual([1,2])
  })
  
  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  })
})