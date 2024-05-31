import{l as e,a as s,c as t,i as a,r as o,b as r}from"./sprites-BrmzA_Ln.js";import"./index-CXtlFtJb.js";const i=16;const l="Repetition is key";const n=`
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

${o()}
${r(i)}

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
 * Can we speed things up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`;export{i as level,n as prescript,p as script,l as title};
