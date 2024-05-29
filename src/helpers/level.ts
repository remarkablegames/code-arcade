import { Level } from '../types'

/**
 * Gets level by number.
 *
 * @param - Level number.
 * @returns - Level config.
 */
export function getLevel(level: number): Promise<Level> {
  return import(`../levels/${level}.ts`)
}

const headings = document.querySelectorAll(
  'main h1',
) as NodeListOf<HTMLHeadingElement>

/**
 * Renders level heading.
 *
 * @param level - Level config.
 */
export function renderLevel(level: Level) {
  headings.forEach(
    (heading) => (heading.innerText = `${level.level}. ${level.title}`),
  )
}
