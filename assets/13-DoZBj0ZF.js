import{h as e,i as o,f as t,a as n,b as a,r as y,c as r}from"./sprites-Dk09a4Sc.js";import"./index-DHW99aeY.js";import{a as s}from"./texts-D4Uwcsjn.js";const c=13;const p="Loops";const m="Use for loops to add blocks around enemy";const E=`
${e()}
${o()}
${t()}

${n()}
${a()}

${y()}
${r(c)}

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

${s("Block yourself")}
`;const f=`
/**
 * Can you build a fortress to block the enemy?
 */

const block = {
  width: 64,
  height: 64,
}

function addBlock(x, y) {
  add([
    sprite('block'),
    pos(x, y),
    area(),
    body({ isStatic: true }),
  ])
}

addBlock(block.width * 3, block.height * 3)
`;const b=`
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
`;export{m as hint,c as level,b as postscript,E as prescript,f as script,p as title};
