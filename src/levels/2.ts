import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 2
export const title = 'Strings'

export function prescript() {
  initLevel(level)

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
  )
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
