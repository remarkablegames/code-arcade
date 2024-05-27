import { addCursorKeys, initLevel } from '../helpers'
import { Sprite } from '../types'

export const level = 10
export const title = 'Loops 2'
let cleanups: (() => void)[]

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

export function prescript() {
  initLevel(level, cleanups)
  loadSprite(Sprite.spike, 'sprites/spike.png')

  addCursorKeys(
    add([
      sprite(Sprite.player),
      pos(40, 80),
      area(),
      body(),
      anchor('center'),
      Sprite.player,
    ]),
  )

  add([sprite(Sprite.exit), pos(500, 500), area(), Sprite.exit])

  const tileSize = 64

  map.forEach((row, rowIndex) => {
    row.split('').forEach((column, columnIndex) => {
      if (column === '^') {
        add([
          sprite(Sprite.spike),
          area(),
          pos(tileSize * columnIndex, tileSize * rowIndex),
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

  add([text('Invisible spikes')])
}

export const script = `
/**
 * forEach loops iterate over an array
 */

const spikes = get('spike')
spikes[0].opacity = 0
`

export function postscript() {
  const spikesCount = map.join('').split(' ').join('').length
  const player = get('player')[0]

  cleanups.push(
    onUpdate(() => {
      const { x, y } = player.pos

      if (x < 0 || y < 0 || x > width() || y > height()) {
        player.moveTo(40, 80)
      }

      if (get(Sprite.spike).length < spikesCount) {
        throw new Error(`There must be ${spikesCount} spikes!`)
      }
    }).cancel,
  )
}
