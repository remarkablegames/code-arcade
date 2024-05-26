import { addCursorKeys } from '../helpers'

export const title = 'Level 0: Hello, World!'

export function beforeScript() {
  loadSprite('player', 'sprites/bean.png')
  const player = add([sprite('player'), pos(80, 40), area()])
  addCursorKeys(player)
}

export const script = `
add([
  text('WASD or arrow keys to move', { width: 600 })
])
`

export function afterScript() {}
