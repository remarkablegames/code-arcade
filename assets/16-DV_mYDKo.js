import{l as e,d as t,a as s,r as o,c as a}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";const r=16;const d="Repetition is key";const n=`
${e()}
${t()}

${s({pos:"center()"})}

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
`;const l=`
/**
 * Can we speed things up?
 */

function collectKey() {
  const player = get('player')[0]
  const key = get('key')[0]
  key && player.moveTo(key.pos)
}
`;export{r as level,n as prescript,l as script,d as title};
