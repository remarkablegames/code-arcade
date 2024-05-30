import{l as e,a as o,b as r}from"./sprites-CKW4rCNR.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-CrWy8xcs.js";const t=7;const l="Objects";const c=`
${e()}
${o()}

const player = add([sprite('player'), pos(0, 36), area(), body(), 'player'])
add([sprite('exit'), pos(516, 516), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${r(t)}

${s("Reposition me")}
`;const d=`
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
`;export{t as level,c as prescript,d as script,l as title};
