import{i as e,j as o,g as t,a,b as n,r,c as s}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a as d}from"./texts-D4Uwcsjn.js";const c=16;const p="Loops";const m="Use for loops to add blocks around enemy";const E=`
${e()}
${o()}
${t()}

${a()}
${n()}

${r()}
${s(c)}

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

${d("Block yourself")}
`;const b=`
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
get('enemy')[0]?.moveTo(center())
get('exit')[0]?.moveTo(550, 550)
get('player')[0]?.moveTo(50, 70)
`;export{m as hint,c as level,f as postscript,E as prescript,b as script,p as title};
