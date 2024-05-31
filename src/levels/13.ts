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

export const level = 13
export const title = 'Loops'

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

${addText('Protect yourself')}
`

export const script = `
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
`

export const postscript = `
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
`
