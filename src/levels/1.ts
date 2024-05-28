import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 1
export const title = 'Comments'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
    ).cancel,
  )

  add([text("Where's the exit?")])
}

export const script = `
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])

/*
debug.inspect = true
*/
`

export function postscript() {}
