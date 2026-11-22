import { expect, test } from 'vitest'
import { Solution5 } from './solution5'

test('part 1', () => {
    const solution = new Solution5();
    const input = "aaa";
    expect(solution.solvePart1(Buffer.from(input))).toBe("")
})

test('part 2', () => {
    const solution = new Solution5();
    const input = "aaa";
    expect(solution.solvePart2(Buffer.from(input))).toBe("")
})