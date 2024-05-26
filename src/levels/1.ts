import { addCursorKeys } from '../helpers'
import { Scene, Sprite } from '../types'

export const level = 1
export const title = 'Comments'

export function prescript() {
  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
  )

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, 0)
  })

  add([text("Where's the exit?")])
}

export const script = `
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])
`

export function postscript() {}
