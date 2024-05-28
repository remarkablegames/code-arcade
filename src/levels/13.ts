import { addCursorKeys, clearAllIntervals, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 13
export const title = 'Timer 2'

export function prescript() {
  initLevel(level, [clearAllIntervals])

  addCursorKeys(
    add([
      sprite(Sprite.player),
      pos(50, 80),
      area(),
      anchor('center'),
      Sprite.player,
    ]),
  )

  add([
    sprite(Sprite.exit),
    pos(center()),
    area(),
    anchor('center'),
    Sprite.exit,
  ])

  add([text('Exit in a loop')])
}

export const script = `
/**
 * setInterval() calls a function at specified intervals
 */

const MILLISECOND = 1
const SECOND = MILLISECOND * 1000

const player = get('player')[0]
const exit = get('exit')[0]

setInterval(() => {
  exit.moveTo(
    randi(player.pos.x, width()),
    randi(player.pos.y, height()),
  )
}, SECOND)
`

export function postscript() {}
