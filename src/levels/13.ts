import {
  addExit,
  addPlayer,
  addText,
  loadHit,
  loadSpike,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 13
export const title = 'forEach'

const map = `
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
`
const spikesCount = map.split('^').length - 1

export const hint = `There are ${spikesCount} spikes`

export const prescript = `
${loadHit()}
${loadSpike()}

${addPlayer()}
${addExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

${map}
const TILE_SIZE = 64

map.forEach((row, rowIndex) => {
  row.split('').forEach((column, columnIndex) => {
    if (column === '^') {
      add([
        sprite('spike'),
        area(),
        pos(TILE_SIZE * columnIndex, TILE_SIZE * rowIndex),
        opacity(0),
        'spike',
      ])
    }
  })
})

onCollide('player', 'spike', (player, spike) => {
  play('hit')
  spike.opacity = 1
  player.destroy()
  addKaboom(player.pos)
})

onUpdate(() => {
  const player = get('player')[0]
  if (!player) {
    return
  }

  const { x, y } = player.pos
  if (x < 0 || y < 0 || x > width() || y > height()) {
    player.moveTo(40, 80)
  }

  if (get('spike').length < ${spikesCount}) {
    throw new Error('There must be ' + ${spikesCount} + ' spikes!')
  }
})

${addText('Invisible spikes')}
`

export const script = `
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
const firstSpike = spikes[0]
firstSpike.opacity = 1
`

export const postscript = `
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(550, 550)
}

const player = get('player')[0]
if (player) {
  player.moveTo(50, 70)
}
`
