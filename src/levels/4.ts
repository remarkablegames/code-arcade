import { addCursorKeys } from '../helpers'
import { Scene, Sprite } from '../types'

export const level = 4
export const title = 'Booleans'

export function prescript() {
  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
  )

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, level + 1)
  })

  add([text('Exit is not truthy')])
}

export const script = `
/**
 * Booleans can either be true or false
 */

if (false) {
  add([
    sprite('exit'),
    area(),
    'exit',
  ])
}
`

export function postscript() {}
