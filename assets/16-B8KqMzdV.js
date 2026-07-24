import{i as e,o as t,r as n,t as r}from"./sprites-BBwFSzAc.js";import{t as i}from"./texts-BNBRxv-Z.js";import{a,i as o,r as s}from"./index-ByB9seIk.js";var c=16,l=`Loops`,u=`Use for loops to add blocks around enemy`,d=`
${e()}
${t()}
${a()}

${n()}
${r()}

${s()}
${o(16)}

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

${i(`Block yourself`)}
`,f=`
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
`,p=`
get('enemy')[0]?.moveTo(center())
get('exit')[0]?.moveTo(550, 550)
get('player')[0]?.moveTo(50, 70)
`;export{u as hint,c as level,p as postscript,d as prescript,f as script,l as title};