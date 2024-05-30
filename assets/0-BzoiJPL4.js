import{l as e,a as o,r as t,b as r}from"./sprites-DIKLQSSL.js";import{a as s}from"./texts-qyIFEy4l.js";import"./index-U8zA4yR0.js";const a=0;const p="console.log";const c=`
${e()}
${o()}

add([sprite('player'), pos(50, center().y), area(), 'player'])
add([sprite('exit'), pos(500, center().y), area(), 'exit'])

${t()}
${r(a)}

${s("WASD or arrow keys to move")}
add([text('Goal: reach the exit'), pos(0, 64), color(0, 0, 0)])
`;const d=`
/**
 * console.log() outputs a message to the console
 */

// change the message below and press "Run"
console.log('Hello, World!')
`;export{a as level,c as prescript,d as script,p as title};
