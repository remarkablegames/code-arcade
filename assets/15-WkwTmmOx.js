import{l as e,a as s,c as t,i as a,r,b as o}from"./sprites-BjVUeMvX.js";import"./index-D5AZ38lH.js";const i=15;const l="Timer";const n=`
${e()}
${s()}
${t()}
${a()}

add([sprite('player'), pos(center()), area(), 'player'])

let keys = 420

const getMessage = () => 'Collect ' + keys + ' more key' + (keys !== 1 ? 's' : '')

const message = add([text(getMessage())])

function addKey() {
  add([
    sprite('key'),
    pos(randi(width()), randi(height())),
    area(),
    anchor('center'),
    'key',
  ])
}

addKey()

${r()}
${o(i)}

onCollide('key', 'player', (key) => {
  play('signal', { volume: 0.2, speed: 2 })
  keys--
  key.destroy()
  message.text = getMessage()

  if (keys) {
    addKey()
  } else {
    add([sprite('exit'), pos(center()), area(), 'exit'])
  }
})

onAdd('exit', () => {
  if (keys) {
    destroyAll('exit')
  }
})
`;const p=`
/**
 * Can we speed this up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`;export{i as level,n as prescript,p as script,l as title};
