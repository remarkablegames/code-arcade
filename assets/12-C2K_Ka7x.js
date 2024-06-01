import{f as e,g as t,a as o,b as i,r as s,c as r}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a}from"./texts-D4Uwcsjn.js";const p=12;const y="forEach";const d=`
${e()}
${t()}

${o()}
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

// hint: there are 25 spikes in this level
const spikes = get('spike')
spikes[0].opacity = 1
`;const h=`
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(550, 550)
}

const player = get('player')[0]
if (player) {
  player.moveTo(50, 70)
}
`;export{p as level,h as postscript,d as prescript,m as script,y as title};
