import { addCursorKeys, clearAllTimers, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 14
export const title = 'Timer 3'
let cleanups: Cleanup[] = []
let keys: number

function getMessage() {
  return `Collect ${keys} more key${keys !== 1 ? 's' : ''}`
}

function addKey() {
  add([
    sprite(Sprite.key),
    pos(randi(width()), randi(height())),
    area(),
    anchor('center'),
    Sprite.key,
  ])
}

export function prescript() {
  cleanups = [clearAllTimers]
  initLevel(level, cleanups)

  keys = 420
  loadSprite(Sprite.key, 'sprites/key.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), Sprite.player]),
  )

  const message = add([text(getMessage())])

  addKey()

  cleanups.push(
    onCollide(Sprite.key, Sprite.player, (key) => {
      keys--
      key.destroy()
      message.text = getMessage()

      if (keys) {
        addKey()
      } else {
        add([sprite(Sprite.exit), pos(center()), area(), Sprite.exit])
      }
    }).cancel,
  )

  cleanups.push(
    onAdd(Sprite.exit, () => {
      if (keys) {
        destroyAll(Sprite.exit)
      }
    }).cancel,
  )
}

export const script = `
const player = get('player')[0]
const key = get('key')[0]
`

export function postscript() {}
