import{l as t,a as e,b as o,r as s}from"./sprites-BjVUeMvX.js";import{a as i}from"./texts-qyIFEy4l.js";import"./index-D5AZ38lH.js";const r=2;const c="Multi-line comments";const p=`
${t()}
${e()}

add([sprite('exit'), pos(center()), area(), 'exit'])

${o(r)}

${i("Uncomment the player")}
`;const m=`
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
`;export{r as level,d as postscript,p as prescript,m as script,c as title};
