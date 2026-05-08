import{c as e,h as t,i as n,l as r,m as i}from"./index-C2wpxjHL.js";var a=19,o=`Repetition is key`,s=`Use setInterval()`,c=`
${e()}
${r()}

${n({pos:`center()`})}

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

${i()}
${t(19)}

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
`,l=`
/**
 * Can we speed things up?
 */

function collectKey() {
  const player = get('player')[0]
  const key = get('key')[0]
  key && player.moveTo(key.pos)
}
`;export{s as hint,a as level,c as prescript,l as script,o as title};