import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 4
export const title = 'Booleans'

export function prescript() {
  initLevel(level)

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
  )

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
