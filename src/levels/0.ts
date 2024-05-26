export function beforeScript() {
  loadSprite('player', 'sprites/bean.png')
}

export const script = `
add([
  sprite('player'),
  pos(80, 40),
  area(),
])
`

export function afterScript() {}
