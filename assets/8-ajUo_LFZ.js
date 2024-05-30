import{l as e,a as o,b as t}from"./sprites-CKW4rCNR.js";import{a as r}from"./texts-qyIFEy4l.js";import"./index-CrWy8xcs.js";const a=8;const l="Functions";const n=`
${e()}
${o()}

add([sprite('player'), pos(0, 36), area(), 'player'])
add([sprite('exit'), pos(center().x, 500), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${t(a)}

${r("Move me")}
`;const c=`
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]
player.move(0, 0)

function movePlayer() {
  // how can we move the player?
}

player.onUpdate(() => movePlayer())
`;const d=`
get('player')[0].moveTo(0, 36)
`;export{a as level,d as postscript,n as prescript,c as script,l as title};
