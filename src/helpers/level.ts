import type { Level } from '../types'

export function getLevel(level: number): Promise<Level> {
  return import(`../levels/${level}.ts`)
}

const titles = document.querySelectorAll(
  '.title',
) as NodeListOf<HTMLHeadingElement>

export function renderLevel(level: Level) {
  titles.forEach((title) => (title.innerText = level.title))
}
