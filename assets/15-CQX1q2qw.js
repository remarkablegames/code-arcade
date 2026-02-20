import{g as t,h as s,a as i,b as r,r as p,c as a}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as n}from"./texts-D4Uwcsjn.js";const c=15;const m="forEach";const o=`
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
`;const e=o.split("^").length-1;const h=`There are ${e} spikes`;const k=`
${t()}
${s()}

${i()}
${r()}

${p()}
${a(c)}

${o}
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
`;const f=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
const firstSpike = spikes[0]
firstSpike.opacity = 1
`;const E=`
get('exit')[0]?.moveTo(550, 550)
get('player')[0]?.moveTo(50, 70)
`;export{h as hint,c as level,E as postscript,k as prescript,f as script,m as title};
