import { addCursorKeys, clearAllTimeouts, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 12
export const title = 'Timer 1'

export function prescript() {
  initLevel(level, [clearAllTimeouts])

  addCursorKeys(
    add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
  )

  add([text('Wait for the exit')])
}

export const script = `
/**
 * setTimeout() executes a function once the timer expires
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000
const MINUTE = SECOND * 60

setTimeout(() => {
  add([sprite('exit'), pos(center()), area(), 'exit'])
}, 5 * MINUTE)
`

export function postscript() {}
