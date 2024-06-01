import{a as e,b as o,k as t,c as r}from"./sprites-tfR4wh1N.js";import"./index-BTVd75Gu.js";import{a}from"./texts-D4Uwcsjn.js";const s=9;const c="Functions";const l=`
${e()}
${o({pos:"center().x, 550"})}

${t()}
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
`;const d=`
get('player')[0].moveTo(50, 75)
`;export{s as level,d as postscript,l as prescript,m as script,c as title};
