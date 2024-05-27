import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 1
export const title = 'Comments'

export function prescript() {
  initLevel(level)

  addCursorKeys(
    add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
  )

  add([text("Where's the exit?")])
}

export const script = `
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])
`

export function postscript() {}
