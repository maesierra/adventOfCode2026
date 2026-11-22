import { expect, test } from 'vitest'
import { Solution1 } from './solution1'

test('part 1', () => {
    const solution = new Solution1();
    const input = "aaa";
    expect(solution.solvePart1(Buffer.from(input))).toBe("")
})

test('part 2', () => {
    const solution = new Solution1();
    const input = "aaa";
    expect(solution.solvePart2(Buffer.from(input))).toBe("")
})