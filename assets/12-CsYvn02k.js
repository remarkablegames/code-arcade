import{l as e,a as o,g as t,h as a,e as n,r,b as y}from"./sprites-COPK4Gqt.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-DN4CyoXJ.js";const l=12;const i="Loops";const m=`
${e()}
${o()}
${t()}
${a()}
${n()}

add([
  sprite('player'),
  pos(40, 60),
  area(),
  body(),
  anchor('center'),
  'player',
])

add([sprite('exit'), pos(500, 500), area(), 'exit'])

${r()}
${y(l)}

const ENEMY_SPEED = 500

let cancelEnemyUpdate;

function addEnemy() {
  const enemy = add([
    sprite('enemy'),
    pos(center()),
    area(),
    body(),
    'enemy',
  ])

  cancelEnemyUpdate = enemy.onUpdate(() => {
    const player = get('player')[0]
    if (player) {
      const dir = player.pos.sub(enemy.pos).unit()
      enemy.move(dir.scale(ENEMY_SPEED))
    }
  }).cancel

  return enemy
}

addEnemy()

onCollide('player', 'enemy', (player, enemy) => {
  if (typeof cancelEnemyUpdate === 'function') {
    cancelEnemyUpdate()
  }
  play('hit')
  player.destroy()
  addKaboom(player.pos)
})

onDestroy('enemy', () => {
  addEnemy()
})

${s("Protect yourself")}
`;const E=`
/**
 * Can you build a fortress to protect yourself?
 */

const block = {
  width: 64,
  height: 64,
}

add([
  sprite('block'),
  pos(block.width * 6, block.height * 6),
  area(),
  body({ isStatic: true }),
])
`;const f=`
const player = get('player')[0]
if (player) {
  player.moveTo(40, 60)
}

const enemy = get('enemy')[0]
if (enemy) {
  enemy.moveTo(center())
}
`;export{l as level,f as postscript,m as prescript,E as script,i as title};
