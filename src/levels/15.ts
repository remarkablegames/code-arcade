import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 15
export const title = 'JSON.stringify'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  loadSprite(Sprite.key, 'sprites/key.png')

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(100, 100), area(), Sprite.player]),
    ).cancel,
  )

  const password = JSON.stringify({ level, year: new Date().getFullYear() })

  add([sprite(Sprite.key), pos(center()), area(), Sprite.key, { password }])

  const cancelCollideEvent = onCollide(Sprite.key, Sprite.player, (key) => {
    if (key.password === password) {
      cancelCollideEvent()
      key.destroy()
      add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])
    } else {
      debug.log('Incorrect password')
    }
  }).cancel

  cleanups.push(cancelCollideEvent)

  add([text('Got the password?')])
}

export const script = `
/**
 * JSON.stringify() is a method that converts data into a string
 */

const key = get('key')[0]

// password = JSON string of object containing 'level' and 'year'
let password

key.password = password
`

export function postscript() {}
