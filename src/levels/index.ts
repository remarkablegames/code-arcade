import type { Level } from './types'

export function getLevel(level: number): Promise<Level> {
  return import(`../levels/${level}.ts`)
}
