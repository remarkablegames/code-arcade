import{l as r,a as e,b as t,r as o}from"./sprites-BrmzA_Ln.js";import"./index-CXtlFtJb.js";const s=3;const p="Errors";const n=`
${r()}
${e()}

add([sprite('player'), pos(50, 50), area(), 'player'])
add([sprite('exit'), pos(center()), area(), 'exit'])

${t(s)}
`;const c=`
/**
 * Errors interfere with the execution of the program
 */

throw new Error('Remove the error')
`;const l=`
${o()}
`;export{s as level,l as postscript,n as prescript,c as script,p as title};
