import { describe, expect, it } from 'vitest'

describe('unit', () => {
  it('should 1', () => {
    expect(123).eq(123)
  })
  it('should 2', () => {
    expect('test vitest').eq('test vitest')
  })
})