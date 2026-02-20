import{l as e,k as t,a as s,r as o,c as a}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";const r=19;const y="Repetition is key";const d="Use setInterval()";const l=`
${e()}
${t()}

${s({pos:"center()"})}

let keys = 420

const getMessage = () => 'Collect ' + keys + ' more key' + (keys !== 1 ? 's' : '')

add([rect(width(), 32), color(0, 0, 0), z(100)])
const message = add([text(getMessage()), z(100)])

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
`;const c=`
/**
 * Can we speed things up?
 */

function collectKey() {
  const player = get('player')[0]
  const key = get('key')[0]
  key && player.moveTo(key.pos)
}
`;export{d as hint,r as level,l as prescript,c as script,y as title};
