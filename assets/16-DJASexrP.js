import{l as e,d as s,j as t,a,r as o,c as i}from"./sprites-M-owXaHm.js";import"./index-7cZA0KuL.js";const r=16;const n="Repetition is key";const l=`
${e()}
${s()}
${t()}

${a({pos:"center()"})}

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
${i(r)}

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
`;export{r as level,l as prescript,p as script,n as title};
