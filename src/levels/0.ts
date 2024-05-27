import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 0
export const title = 'Hello, World!'

export function prescript() {
  initLevel(level)
  addCursorKeys(
    add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
  )
  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])
}

export const script = `
add([
  text('WASD or arrow keys to move')
])
`

export function postscript() {}
