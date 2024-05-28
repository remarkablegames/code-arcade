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

let cancels: Cleanup[] = []

/**
 * Initializes level.
 *
 * @param level - Level number.
 * @param cleanups - Cleanup callbacks.
 */
export function initLevel(level: number, cleanups: Cleanup[] = []) {
  cancels.forEach((cancel) => cancel())
  cancels = []

  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  cancels.push(
    onAdd(Sprite.exit, (exit) => {
      if (get(Sprite.exit).length > 1) {
        destroy(exit)
      }
    }).cancel,
  )

  cancels.push(
    onCollide(Sprite.player, Sprite.exit, () => {
      cleanups.concat(cancels).forEach((cleanup) => cleanup())
      cancels = []

      const nextLevel = level + 1
      setData(Data.level, nextLevel)
      go(Scene.game, nextLevel)
    }).cancel,
  )
}
