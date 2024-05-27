import { addCursorKeys } from '../helpers'
import { Scene, Sprite } from '../types'

export const level = 5
export const title = 'Arrays'

export function prescript() {
  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')
  loadSprite(Sprite.wall, 'sprites/steel.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(center()), area(), body(), Sprite.player]),
  )

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, 0)
  })

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
