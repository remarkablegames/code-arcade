import { addCursorKeys } from '../helpers'
import { Scene, Sprite } from '../types'

export const level = 2
export const title = 'Strings'

export function prescript() {
  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
  )

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, 0)
  })
}

export const script = `
/**
 * Strings are text inside single or double quotes
 */

add([
  sprite('exite'),
  area(),
  "exit",
])
`

export function postscript() {}
