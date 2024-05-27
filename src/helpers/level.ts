import { Level, Scene, Sprite } from '../types'

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
 * @param cleanup - Cleanup callback.
 */
export function initLevel(level: number, cleanup?: () => void) {
  if (typeof cleanup === 'function') {
    cleanup()
  }

  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, level + 1)

    if (typeof cleanup === 'function') {
      cleanup()
    }
  })
}
