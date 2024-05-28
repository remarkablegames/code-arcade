import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 5
export const title = 'Arrays'
const cleanups: Cleanup[] = []

export function prescript() {
  initLevel(level, cleanups)

  loadSprite(Sprite.wall, 'sprites/steel.png')

  cleanups.push(
    addCursorKeys(
      add([
        sprite(Sprite.player),
        pos(center()),
        area(),
        body(),
        Sprite.player,
      ]),
    ).cancel,
  )

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  add([text('Escape the walls')])
}

export const script = `
/**
 * Arrays are an ordered list of data
 */

const level = [
  '#######',
  '#     #',
  '#     #',
  '#     #',
  '#     #',
  '#######',
]

addLevel(level, {
  tileWidth: 64,
  tileHeight: 64,
  pos: vec2(64, 64),
  tiles: {
    '#': () => [
      sprite('wall'),
      area(),
      body({ isStatic: true }),
    ],
  }
})
`

export function postscript() {}
