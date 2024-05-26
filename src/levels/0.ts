import { addCursorKeys } from '../helpers'
import { Scene, Sprite } from '../types'

export const level = 0
export const title = 'Hello, World!'

export function prescript() {
  loadSprite(Sprite.player, 'sprites/bean.png')
  loadSprite(Sprite.exit, 'sprites/door.png')

  addCursorKeys(
    add([sprite(Sprite.player), pos(50, 50), area(), Sprite.player]),
  )
  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  onCollide(Sprite.player, Sprite.exit, () => {
    go(Scene.game, level)
  })
}

export const script = `
add([
  text('WASD or arrow keys to move', { width: 600 })
])
`

export function postscript() {}
