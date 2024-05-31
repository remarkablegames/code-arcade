import{l as e,a as o,b as t}from"./sprites-2V4iAjb-.js";import{a as r}from"./texts-qyIFEy4l.js";import"./index-BaUw5eD3.js";const a=9;const l="Functions";const n=`
${e()}
${o()}

add([sprite('player'), pos(0, 36), area(), 'player'])
add([sprite('exit'), pos(center().x, 500), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${t(a)}

${r("Move me")}
`;const d=`
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;const c=`
get('player')[0].moveTo(0, 36)
`;export{a as level,c as postscript,n as prescript,d as script,l as title};
