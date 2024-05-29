import{l as e,a as t,r,b as s}from"./sprites-BgHRVQJw.js";const a=1;const o="Comments";const l=`
${e}
${t}

const player = add([sprite('player'), pos(50, 50), area(), 'player'])

${r()}
${s(a)}

add([text("Where's the exit?")])
`;const n=`
/**
 * Single line comments start with two forward slashes //
 */

// add([sprite('exit'), pos(center()), area(), 'exit'])

/*
debug.inspect = true
*/
`;export{a as level,l as prescript,n as script,o as title};
