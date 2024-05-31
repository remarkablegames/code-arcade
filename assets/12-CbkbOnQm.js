import{l as e,a as o,e as t,f as i,r as s,b as a}from"./sprites-DHOrPU-j.js";import{a as r}from"./texts-qyIFEy4l.js";import"./index-kkyszdDf.js";const p=12;const d="forEach";const y=`
${e()}
${o()}
${t()}
${i()}

add([
  sprite('player'),
  pos(40, 80),
  area(),
  body(),
  anchor('center'),
  'player',
])

add([sprite('exit'), pos(500, 500), area(), 'exit'])

${s()}
${a(p)}

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

  if (get('spike').length < SPIKES_COUNT) {
    throw new Error('There must be ' + SPIKES_COUNT + ' spikes!')
  }
})

${r("Invisible spikes")}
`;const m=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;const x=`
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(500, 500)
}
`;export{p as level,x as postscript,y as prescript,m as script,d as title};
