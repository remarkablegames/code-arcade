import{l as e,a as o,r as t,b as s}from"./sprites-Bgw52aqI.js";const r=0;const l="console.log";const n=`
${e()}
${o()}

const player = add([sprite('player'), pos(50, center().y), area(), 'player'])
add([sprite('exit'), pos(500, center().y), area(), 'exit'])

${t()}
${s(r)}

add([text('WASD or arrow keys to move')])
add([text('Goal: reach the exit'), pos(0, 64), color(0, 0, 0)])
`;const c=`
/**
 * console.log() outputs a message to the console
 */

// change the message below and press "Run"
console.log('Hello, World!')
`;export{r as level,n as prescript,c as script,l as title};
