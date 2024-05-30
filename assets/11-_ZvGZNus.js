import{l as e,a as o,e as r,r as s,b as i}from"./sprites-CKW4rCNR.js";import{a as t}from"./texts-qyIFEy4l.js";import"./index-CrWy8xcs.js";const a=11;const c="forEach";const d=`
${e()}
${o()}
${r()}
loadSprite('spike', 'sprites/spike.png')

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
${i(a)}

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

${t("Invisible spikes")}
`;const y=`
/**
 * forEach() is an iterative method
 */

const spikes = get('spike')
spikes[0].opacity = 0
`;export{a as level,d as prescript,y as script,c as title};
