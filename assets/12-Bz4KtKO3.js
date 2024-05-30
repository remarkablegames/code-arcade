import{l as e,a as t,r as a,b as o}from"./sprites-Byab-hWy.js";import"./index-WTQywSR1.js";const n=12;const y="Loops";const l=`
${e()}
${t()}
loadSprite('enemy', 'sprites/ghosty.png')
loadSprite('wall', 'sprites/steel.png')

add([
  sprite('player'),
  pos(40, 60),
  area(),
  body(),
  anchor('center'),
  'player',
])

add([sprite('exit'), pos(500, 500), area(), 'exit'])

${a()}
${o(n)}

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
  player.destroy()
  addKaboom(player.pos)
})

onDestroy('enemy', () => {
  addEnemy()
})

add([text('Protect yourself')])
`;const p=`
/**
 * Can you build a fortress to protect yourself?
 */

const wall = {
  width: 64,
  height: 64,
}

add([
  sprite('wall'),
  pos(wall.width * 6, wall.height * 6),
  area(),
  body({ isStatic: true }),
])
`;const i=`
const player = get('player')[0]
if (player) {
  player.moveTo(40, 60)
}

const enemy = get('enemy')[0]
if (enemy) {
  enemy.moveTo(center())
}
`;export{n as level,i as postscript,l as prescript,p as script,y as title};
