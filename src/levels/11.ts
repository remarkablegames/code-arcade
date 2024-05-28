import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 11
export const title = 'Loops 3'
const cleanups: Cleanup[] = []

const ENEMY_SPEED = 500

let cancelEnemyUpdate: () => void

function addEnemy() {
  const enemy = add([
    sprite(Sprite.enemy),
    pos(center()),
    area(),
    body(),
    Sprite.enemy,
  ])

  cancelEnemyUpdate = enemy.onUpdate(() => {
    const player = get(Sprite.player)[0]
    if (player) {
      const dir = player.pos.sub(enemy.pos).unit()
      enemy.move(dir.scale(ENEMY_SPEED))
    }
  }).cancel

  cleanups.push(cancelEnemyUpdate)

  return enemy
}

export function prescript() {
  initLevel(level, cleanups)

  loadSprite(Sprite.enemy, 'sprites/ghosty.png')
  loadSprite(Sprite.wall, 'sprites/steel.png')

  const player = add([
    sprite(Sprite.player),
    pos(40, 60),
    area(),
    body(),
    anchor('center'),
    Sprite.player,
  ])

  cleanups.push(addCursorKeys(player).cancel)

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  addEnemy()

  cleanups.push(
    onCollide(Sprite.player, Sprite.enemy, (player, enemy) => {
      cancelEnemyUpdate()
      enemy.onUpdate(() => {}).cancel()
      player.destroy()
      addKaboom(player.pos)
    }).cancel,
  )

  cleanups.push(
    onDestroy(Sprite.enemy, () => {
      addEnemy()
    }).cancel,
  )

  add([text('Protect yourself')])
}

export const script = `
const wall = {
  width: 64,
  height: 64,
}

add([
  sprite('wall'),
  pos(wall.width * 6, wall.height * 6),
  area(),
  body({ isStatic: true }),
])
`

export function postscript() {
  const enemy = get(Sprite.enemy)[0]
  if (enemy) {
    enemy.moveTo(center())
  }
}
