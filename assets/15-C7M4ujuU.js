import{d as e,g as t,h as n,i as r,m as i,n as a,t as o}from"./index--3CafFNT.js";var s=15,c=`forEach`,l=`
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
`,u=l.split(`^`).length-1,d=`There are ${u} spikes`,f=`
${t()}
${e()}

${r()}
${a()}

${i()}
${n(15)}

${l}
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

  if (get('spike').length < ${u}) {
    throw new Error('There must be ' + ${u} + ' spikes!')
  }
})

${o(`Invisible spikes`)}
`,p=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
const firstSpike = spikes[0]
firstSpike.opacity = 1
`,m=`
get('exit')[0]?.moveTo(550, 550)
get('player')[0]?.moveTo(50, 70)
`;export{d as hint,s as level,m as postscript,f as prescript,p as script,c as title};