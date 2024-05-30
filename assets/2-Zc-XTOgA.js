import{l as t,a as e,b as o,r as s}from"./sprites-CqAi-61g.js";import"./index-BZnxxq9W.js";const i=2;const a="Multi-line comments";const l=`
${t()}
${e()}

add([sprite('exit'), pos(center()), area(), 'exit'])

${o(i)}

add([text('Uncomment the player')])
`;const c=`
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
`;const p=`
${s()}
`;export{i as level,p as postscript,l as prescript,c as script,a as title};
