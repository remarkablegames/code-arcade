import{l as r,a as e,b as t,r as o}from"./sprites-Bi3WeMWQ.js";import"./index-lv7y_SZO.js";const s=3;const p="Errors";const n=`
${r()}
${e()}

add([sprite('player'), pos(50, 50), area(), 'player'])
add([sprite('exit'), pos(center()), area(), 'exit'])

${t(s)}
`;const c=`
/**
 * Errors interfere with the execution of the program
 */

onUpdate(() => {
  throw new Error('Remove the error')
})

`;const l=`
${o()}
`;export{s as level,l as postscript,n as prescript,c as script,p as title};
