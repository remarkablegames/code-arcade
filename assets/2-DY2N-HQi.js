import{l as t,a as e,b as o,r as s}from"./sprites-X-fX4rmQ.js";import"./index-DrkCDwxr.js";import{a as i}from"./texts-qyIFEy4l.js";const r=2;const c="Multi-line comments";const m=`
${t()}
${e()}

add([sprite('exit'), pos(center()), area(), 'exit'])

${o(r)}

${i("Uncomment the player")}
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
`;const d=`
${s()}
`;export{r as level,d as postscript,m as prescript,p as script,c as title};
