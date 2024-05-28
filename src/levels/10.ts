import { addCursorKeys, initLevel } from '../helpers'
import { Cleanup, Sprite } from '../types'

export const level = 10
export const title = 'Loops 2'
let cleanups: Cleanup[] = []

const map = [
  '          ',
  '          ',
  '^^^^^  ^^^',
  '          ',
  '^  ^^^^   ',
  '^      ^^^',
  '   ^      ',
  '^^^^ ^^^  ',
]

const SPIKES_COUNT = map.join('').split(' ').join('').length
const TILE_SIZE = 64

export function prescript() {
  cleanups = []
  initLevel(level, cleanups)
  loadSprite(Sprite.spike, 'sprites/spike.png')

  const player = add([
    sprite(Sprite.player),
    pos(40, 80),
    area(),
    body(),
    anchor('center'),
    Sprite.player,
  ])

  cleanups.push(addCursorKeys(player).cancel)

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  map.forEach((row, rowIndex) => {
    row.split('').forEach((column, columnIndex) => {
      if (column === '^') {
        add([
          sprite(Sprite.spike),
          area(),
          pos(TILE_SIZE * columnIndex, TILE_SIZE * rowIndex),
          opacity(0),
          Sprite.spike,
        ])
      }
    })
  })

  cleanups.push(
    onCollide(Sprite.player, Sprite.spike, (player, spike) => {
      spike.opacity = 1
      player.destroy()
      addKaboom(player.pos)
    }).cancel,
  )

  cleanups.push(
    onUpdate(() => {
      const { x, y } = player.pos

      if (x < 0 || y < 0 || x > width() || y > height()) {
        player.moveTo(40, 80)
      }

      if (get(Sprite.spike).length < SPIKES_COUNT) {
        throw new Error(`There must be ${SPIKES_COUNT} spikes!`)
      }
    }).cancel,
  )

  add([text('Invisible spikes')])
}

export const script = `
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`

export function postscript() {}
