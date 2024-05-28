import { initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 6
export const title = 'Objects'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  add([sprite(Sprite.player), pos(0, 36), area(), body(), Sprite.player])
  add([sprite(Sprite.exit), pos(516, 516), area(), Sprite.exit])

  cleanups.push(
    onKeyPress(() => {
      debug.log('Keypress disabled!')
    }).cancel,
  )

  add([text('Reposition me')])
}

export const script = `
/**
 * Objects are a collection of properties or key-value pairs
 */

const player = get('player')[0]
player.pos.x = 0
player.pos.y = 36
`

export function postscript() {}
