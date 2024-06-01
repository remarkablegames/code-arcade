import{f as o,g as s,a as i,b as p,r,c as a}from"./sprites-CsXiAj9t.js";import"./index-CR5-BJ4V.js";import{a as n}from"./texts-D4Uwcsjn.js";const l=12;const m="forEach";const t=`
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
`;const e=t.split("^").length-1;const k=`There's ${e} spikes`;const f=`
${o()}
${s()}

${i()}
${p()}

${r()}
${a(l)}

${t}
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

  if (get('spike').length < ${e}) {
    throw new Error('There must be ' + ${e} + ' spikes!')
  }
})

${n("Invisible spikes")}
`;const h=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
const firstSpike = spikes[0]
firstSpike.opacity = 1
`;const x=`
const exit = get('exit')[0]
if (exit) {
  exit.moveTo(550, 550)
}

const player = get('player')[0]
if (player) {
  player.moveTo(50, 70)
}
`;export{k as hint,l as level,x as postscript,f as prescript,h as script,m as title};
