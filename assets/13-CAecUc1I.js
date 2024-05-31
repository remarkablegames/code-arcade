import{h as e,i as t,f as o,a,b as n,r,c as y}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";import{a as s}from"./texts-qyIFEy4l.js";const c=13;const d="Loops";const m=`
${e()}
${t()}
${o()}

${a()}
${n()}

${r()}
${y(c)}

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
  player.moveTo(50, 70)
}

const enemy = get('enemy')[0]
if (enemy) {
  enemy.moveTo(center())
}

const exit = get('exit')[0]
if (exit) {
  exit.moveTo(550, 550)
}
`;export{c as level,f as postscript,m as prescript,E as script,d as title};
