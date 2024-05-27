import { initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 7
export const title = 'Functions'

export function prescript() {
  initLevel(level)

  add([sprite(Sprite.player), pos(0, 36), area(), Sprite.player])
  add([sprite(Sprite.exit), pos(516, 516), area(), Sprite.exit])

  add([text('Cannot move, automate me')])
}

export const script = `
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0)
}

player.onUpdate(() => movePlayer())
`

export function postscript() {
  const player = get('player')[0]
  player.moveTo(0, 36)
}
