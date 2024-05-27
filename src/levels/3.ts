import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 3
export const title = 'Numbers'

export function prescript() {
  initLevel(level)

  addCursorKeys(
    add([sprite(Sprite.player), pos(500, 500), area(), Sprite.player]),
  )

  add([text('Exit is not in view?')])
}

export const script = `
/**
 * Numbers represent floating-point numbers like 42 or -13.37.
 */

add([
  sprite('exit'),
  area(),
  'exit',
  pos(-9999, -9999),
])
`

export function postscript() {}
