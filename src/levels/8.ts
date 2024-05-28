import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 8
export const title = 'Variables'
let cleanups: Cleanup[] = []

function generatePassword() {
  const year = new Date().getFullYear()
  return (year + level) * 31337
}

export function prescript() {
  cleanups = []
  initLevel(level, cleanups)
  loadSprite(Sprite.key, 'sprites/key.png')

  cleanups.push(
    addCursorKeys(
      add([sprite(Sprite.player), pos(100, 100), area(), Sprite.player]),
    ).cancel,
  )

  const password = generatePassword()
  add([sprite(Sprite.key), pos(center()), area(), Sprite.key, { password }])

  cleanups.push(
    onCollide(Sprite.key, Sprite.player, (key) => {
      if (key.password === password) {
        key.destroy()
        add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])
      } else {
        debug.log('Incorrect password')
      }
    }).cancel,
  )

  add([text("What's the password?")])
}

export const script = `
/**
 * Variables store data
 * 'const' cannot be reassigned, whereas 'let' can be reassigned
 */

const key = get('key')[0]

// password = (current_year + current_level_number) * 31337
let password

key.password = password
`

export function postscript() {}
