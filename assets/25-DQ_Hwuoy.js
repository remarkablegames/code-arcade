import{g as e,h as t,i as n,n as r,o as i,s as a}from"./index-C2wpxjHL.js";var o=25,s=`Last stand`,c=`addEventListener('click', ...)`,l=`
${i()}
${a()}
${e()}

${r({pos:`center()`})}

${t(25)}

let seconds = 30
const getMessage = () => 'Player spawns in ' + seconds + ' sec'

wait(seconds, () => {
  ${n({pos:`center()`})}
})

add([rect(width(), 32), color(0, 0, 0), z(100)])
const message = add([text(getMessage()), z(100)])

const cancelMessageLoop = loop(1, () => {
  if (seconds <= 0) {
    message.text = 'Player spawned'
    cancelMessageLoop()
  } else {
    seconds--
    message.text = getMessage()
  }
}).cancel

const cancelEnemyLoop = loop(1, () => {
  const enemy = add([
    sprite('enemy'),
    pos(randi(2) ? 0 : width(), randi(2) ? 0 : height()),
    anchor('center'),
    area({ scale: 0.9 }),
    body(),
    'enemy',
  ])

  enemy.onUpdate(() => {
    const ENEMY_SPEED = 100
    const exit = get('exit')[0]
    if (exit) {
      const dir = exit.pos.sub(enemy.pos).unit()
      enemy.move(dir.scale(ENEMY_SPEED))
    }
  })
}).cancel

onUpdate('egg', (egg) => {
  const SPEED = 300
  egg.move(egg.dir.scale(SPEED))
})

onCollide('exit', 'enemy', (exit, enemy) => {
  cancelEnemyLoop()
  play('hit')
  exit.destroy()
  enemy.destroy()
  addKaboom(exit.pos)
})

onCollide('egg', 'enemy', (egg, enemy) => {
  play('hit')
  egg.destroy()
  enemy.destroy()
  addKaboom(egg.pos)
})
`,u=`
function shoot() {
  add([
    pos(center()),
    sprite('egg'),
    anchor('center'),
    area({ scale: 0.7 }),
    offscreen({ destroy: true }),
    'egg',
    { dir: mousePos().sub(center()).unit() },
  ])
}
`;export{c as hint,o as level,l as prescript,u as script,s as title};