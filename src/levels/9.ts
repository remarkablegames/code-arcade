import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 9
export const title = 'Loops'

const password = Array.from(Array(42).keys())
  .map(() => 'answer')
  .join('')

export function prescript() {
  initLevel(level)
  loadSprite(Sprite.key, 'sprites/key.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(100, 100), area(), Sprite.player]),
  )

  add([sprite(Sprite.key), pos(center()), area(), Sprite.key, { password }])

  onCollide(Sprite.key, Sprite.player, (key) => {
    if (key.password === password) {
      key.destroy()
      add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])
    } else {
      debug.log('Incorrect password')
    }
  })

  add([text('Another password?')])
}

export const script = `
/**
 * Loops repeat a block of code
 */

const key = get('key')[0]

// password = 'answer' repeated 42 times
let password = 'answer' + 'answer'

key.password = password
`

export function postscript() {}