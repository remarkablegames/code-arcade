import{l as e,a as o,b as s}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const t=7;const p="Objects";const i=`
${e()}
${o()}

const player = add([sprite('player'), pos(0, 36), area(), body(), 'player'])
add([sprite('exit'), pos(516, 516), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${s(t)}

add([text('Reposition me')])
`;const l=`
/**
 * Objects are a collection of properties or key-value pairs
 */

const coordinates = {
  x: 0,
  y: 36,
}

const player = get('player')[0]
player.pos.x = coordinates.x
player.pos.y = coordinates.y
`;export{t as level,i as prescript,l as script,p as title};
