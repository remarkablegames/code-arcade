import { Cleanup, Data, Level, Scene, Sprite } from '../types'

/**
 * Gets level by number.
 *
 * @param - Level number.
 * @returns - Level config.
 */
export function getLevel(level: number): Promise<Level> {
  return import(`../levels/${level}.ts`)
}

const titles = document.querySelectorAll(
  '.title',
) as NodeListOf<HTMLHeadingElement>

/**
 * Renders level title.
 *
 * @param level - Level config.
 */
export function renderLevel(level: Level) {
  titles.forEach(
    (title) => (title.innerText = `${level.level}. ${level.title}`),
  )
}

/**
 * Initializes level.
 *
 * @param level - Level number.
 * @param cleanups - Cleanup callbacks.
 */
export function initLevel(level: number, cleanups?: Cleanup[]) {
  cleanups?.forEach((cleanup) => cleanup())

  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  const collideEvent = onCollide(Sprite.player, Sprite.exit, () => {
    cleanups?.forEach((cleanup) => cleanup())
    collideEvent.cancel()

    const nextLevel = level + 1
    go(Scene.game, nextLevel)
    setData(Data.level, nextLevel)
  })
}
