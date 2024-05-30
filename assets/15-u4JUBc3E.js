import{l as e,a as s,c as t,r as a,b as r}from"./sprites-6a5ZWd5c.js";import"./index-DLb_gdsO.js";const o=15;const d="Timer";const l=`
${e()}
${s()}
${t()}

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

${a()}
${r(o)}

onCollide('key', 'player', (key) => {
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
`;const n=`
/**
 * Can we speed this up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`;export{o as level,l as prescript,n as script,d as title};
