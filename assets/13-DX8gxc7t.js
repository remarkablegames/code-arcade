import{h as e,i as o,f as t,a as n,b as a,r as y,c as r}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a as c}from"./texts-D4Uwcsjn.js";const s=13;const p="Loops";const m=`
${e()}
${o()}
${t()}

${n()}
${a()}

${y()}
${r(s)}

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

${c("Block yourself")}
`;const E=`
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
`;export{s as level,f as postscript,m as prescript,E as script,p as title};
