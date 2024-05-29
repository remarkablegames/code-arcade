import{l as e,a as o,b as t}from"./sprites-Bgw52aqI.js";const a=7;const s="Functions";const p=`
${e()}
${o()}

add([sprite('player'), pos(0, 36), area(), 'player'])
add([sprite('exit'), pos(center().x, 500), area(), 'exit'])

onKeyPress(() => {
  debug.log('Keypress disabled!')
})

${t(a)}

add([text('Move me')])
`;const l=`
/**
 * Functions are blocks of code designed to perform a task
 */

const player = get('player')[0]
player.move(0, 0)

function movePlayer() {
  // how can we move the player?
}

player.onUpdate(() => movePlayer())
`;const n=`
get('player')[0].moveTo(0, 36)
`;export{a as level,n as postscript,p as prescript,l as script,s as title};
