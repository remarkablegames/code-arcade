import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 11
export const title = 'Loops 3'

const cleanups: Cleanup[] = []

const ENEMY_SPEED = 500

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
  addCursorKeys(player)

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  const enemy = add([
    sprite(Sprite.enemy),
    pos(center()),
    area(),
    body(),
    Sprite.enemy,
  ])

  const enemyUpdateEvent = enemy.onUpdate(() => {
    const dir = player.pos.sub(enemy.pos).unit()
    enemy.move(dir.scale(ENEMY_SPEED))
  })
  cleanups.push(enemyUpdateEvent.cancel)

  cleanups.push(
    onCollide(Sprite.player, Sprite.enemy, (player) => {
      enemyUpdateEvent.cancel()
      player.destroy()
      addKaboom(player.pos)
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
  get('enemy')[0].moveTo(center())

  cleanups.push(
    onUpdate(() => {
      if (get(Sprite.enemy).length < 1) {
        throw new Error('There must be 1 enemy!')
      }
    }).cancel,
  )
}
