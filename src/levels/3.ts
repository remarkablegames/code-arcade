import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 3
export const title = 'Numbers'
let cleanups: Cleanup[] = []

export function prescript() {
  cleanups = []
  initLevel(level, cleanups)

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(500, 500), area(), Sprite.player]),
    ).cancel,
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
