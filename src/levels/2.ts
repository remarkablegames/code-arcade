import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 2
export const title = 'Strings'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
    ).cancel,
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
