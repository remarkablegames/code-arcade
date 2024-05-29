import{l as e,a as s,r as t,b as a}from"./sprites-Bgw52aqI.js";const r=14;const y="Timer";const i=`
${e()}
${s()}
loadSprite('key', 'sprites/key.png')

const player = add([sprite('player'), pos(center()), area(), 'player'])

let keys = 420

const getMessage = () =>
  'Collect ' + keys + ' more key' + (keys !== 1 ? 's' : '')

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

${t()}
${a(r)}

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
`;const d=`
/**
 * Can we speed this up?
 */

const player = get('player')[0]
const key = get('key')[0]
// player.moveTo(key.pos)
`;export{r as level,i as prescript,d as script,y as title};
