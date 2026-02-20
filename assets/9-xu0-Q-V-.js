import{a as e,b as t,d as o,c as r}from"./sprites-DIww-dNs.js";import"./index-DyPD81_A.js";import{a}from"./texts-D4Uwcsjn.js";const s=9;const c="Functions";const l="Edit the values in player.move(...)";const d=`
${e()}
${t({pos:"center().x, 550"})}

${o()}
${r(s)}

${a("Move me")}
`;const m=`
/**
 * A function is a block of code designed to perform a task
 */

const player = get('player')[0]

function movePlayer() {
  player.move(0, 0)
}

player.onUpdate(() => movePlayer())
`;const v=`
get('player')[0]?.moveTo(50, 75)
`;export{l as hint,s as level,v as postscript,d as prescript,m as script,c as title};
