import{l as t,a as e,b as o,r as s}from"./sprites-CZYdguN4.js";import"./index-x1ppZCB-.js";const i=2;const n="Multi-line comments";const l=`
${t()}
${e()}

add([sprite('exit'), pos(center()), area(), 'exit'])

${o(i)}

add([text('Uncomment the player')])
`;const p=`
// Multi-line comments start with /* and end with */

/* console.log('This is commented out') */
console.log('This is not commented out')

/*
add([
  sprite('player'),
  pos(50, 50),
  area(),
  'player',
])
*/
`;const c=`
const player = get('player')[0]
if (player) {
${s()}
}
`;export{i as level,c as postscript,l as prescript,p as script,n as title};
