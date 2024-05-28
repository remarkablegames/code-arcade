import { initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 7
export const title = 'Functions'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  add([sprite(Sprite.player), pos(0, 36), area(), Sprite.player])
  add([sprite(Sprite.exit), pos(center().x, 500), area(), Sprite.exit])

  cleanups.push(
    onKeyPress(() => {
      debug.log('Keypress disabled!')
    }).cancel,
  )

  add([text('Move me')])
}

export const script = `
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`

export function postscript() {
  const player = get('player')[0]
  player.moveTo(0, 36)
}
