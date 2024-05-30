import{l as e,a as o,r as p,b as s}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const r=11;const a="forEach";const n=`
${e()}
${o()}
loadSprite('spike', 'sprites/spike.png')
loadSound('explode', 'sounds/hit.mp3')

add([
  sprite('player'),
  pos(40, 80),
  area(),
  body(),
  anchor('center'),
  'player',
])

add([sprite('exit'), pos(500, 500), area(), 'exit'])

${p()}
${s(r)}

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
  play('explode')
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

  if (get('spike').length < SPIKES_COUNT) {
    throw new Error('There must be ' + SPIKES_COUNT + ' spikes!')
  }
})

add([text('Invisible spikes')])
`;const l=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;export{r as level,n as prescript,l as script,a as title};
