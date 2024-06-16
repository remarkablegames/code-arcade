import{a as e,b as o,d as t,c as r}from"./sprites-BYQQgCUS.js";import"./index-YZxV9Vrg.js";import{a as s}from"./texts-D4Uwcsjn.js";const a=9;const p="Functions";const l="0 = not moving";const m=`
${e()}
${o({pos:"center().x, 550"})}

${t()}
${r(a)}

${s("Move me")}
`;const d=`
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;const v=`
get('player')[0].moveTo(50, 75)
`;export{l as hint,a as level,v as postscript,m as prescript,d as script,p as title};
