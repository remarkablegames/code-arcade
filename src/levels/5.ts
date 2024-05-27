import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 5
export const title = 'Arrays'

export function prescript() {
  initLevel(level)
  loadSprite(Sprite.wall, 'sprites/steel.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), body(), Sprite.player]),
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
