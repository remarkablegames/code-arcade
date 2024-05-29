import{l as e,a as t,r as a,b as o}from"./sprites-CZYdguN4.js";import"./index-x1ppZCB-.js";const n=12;const l="Loops";const p=`
${e()}
${t()}
loadSprite('enemy', 'sprites/ghosty.png')
loadSprite('wall', 'sprites/steel.png')

const player = add([
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
`;const y=`
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
`;const d=`
  if (get('enemy').length) {
    get('enemy')[0].moveTo(center())
  }
`;export{n as level,d as postscript,p as prescript,y as script,l as title};
