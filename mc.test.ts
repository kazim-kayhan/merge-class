import { describe, expect, it } from '@jest/globals'
import { mc } from './'

describe('mc function', () => {
  it('should combine class names into a single string', () => {
    expect(mc('font-bold', 'w-4')).toBe('font-bold w-4')
  })

  it('should handle conditional classes correctly', () => {
    const condition = true
    expect(mc('font-bold', condition && 'w-4')).toBe('font-bold w-4')
  })

  it('should eliminate undefined and null values', () => {
    expect(mc('font-bold', undefined, 'w-4', null)).toBe('font-bold w-4')
  })

  it('should merge duplicate classes and prioritize Tailwind utility classes', () => {
    expect(mc('p-4', 'p-2')).toBe('p-2')
  })

  it('should handle arrays of classes', () => {
    expect(mc(['font-bold', 'w-4'], ['px-2'])).toBe('font-bold w-4 px-2')
  })

  it('should handle nested arrays of classes', () => {
    expect(mc(['font-bold', ['w-4', 'px-2']])).toBe('font-bold w-4 px-2')
  })

  it('should process objects with boolean values', () => {
    expect(mc({ 'font-bold': true, 'w-4': false, 'px-2': true })).toBe(
      'font-bold px-2'
    )
  })

  it('should handle a mix of types', () => {
    const condition = false
    expect(mc('font-bold', ['w-4', { 'px-2': true, 'h-5': condition }])).toBe(
      'font-bold w-4 px-2'
    )
  })

  it('should prioritize correctly with Tailwind utilities', () => {
    expect(mc('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })
})
