import {
  addExit,
  addPlayer,
  addText,
  loadBlock,
  loadEnemy,
  loadHit,
  registerPlayerMovement,
  registerWinCondition,
} from '../templates'

export const level = 16
export const title = 'Loops'
export const hint = 'Use for loops to add blocks around enemy'

export const prescript = `
${loadBlock()}
${loadEnemy()}
${loadHit()}

${addPlayer()}
${addExit()}

${registerPlayerMovement()}
${registerWinCondition(level)}

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

${addText('Block yourself')}
`

export const script = `
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
`

export const postscript = `
get('enemy')[0]?.moveTo(center())
get('exit')[0]?.moveTo(550, 550)
get('player')[0]?.moveTo(50, 70)
`
