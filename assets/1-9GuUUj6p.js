import{l as e,a as t,r as s,b as o}from"./sprites-Bgw52aqI.js";const i=1;const a="Single-line comments";const n=`
${e()}
${t()}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${s()}
${o(i)}

add([text('Uncomment the exit')])
`;const l=`
/**
 * Single-line comments start with 2 forward slashes //
 */

// console.log('This is commented out')
console.log('This is not commented out')

// add([sprite('exit'), pos(center()), area(), 'exit'])
`;export{i as level,n as prescript,l as script,a as title};
