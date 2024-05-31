import{f as e,g as o,a as t,b as i,r as s,c as r}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a}from"./texts-qyIFEy4l.js";const p=12;const y="forEach";const d=`
${e()}
${o()}

${t()}
${i()}

${s()}
${r(p)}

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

${a("Invisible spikes")}
`;const m=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;const E=`
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(550, 550)
}

const player = get('player')[0]
if (player) {
  player.moveTo(50, 70)
}
`;export{p as level,E as postscript,d as prescript,m as script,y as title};
