import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 4
export const title = 'Booleans'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
    ).cancel,
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
