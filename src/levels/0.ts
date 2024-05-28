import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 0
export const title = 'Hello, World!'
let cleanups: Cleanup[] = []

export function prescript() {
  cleanups = []
  initLevel(level, cleanups)

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
    ).cancel,
  )

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])
}

export const script = `
add([
  text('WASD or arrow keys to move')
])

// press "Run" button to see the log
console.log('Hello, World!')
`

export function postscript() {}
